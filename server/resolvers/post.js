import Post from "../models/Post.js";
import { ApolloError } from "apollo-server-express";
import { NewPostvalidationRules } from "../validators/postValidator.js";
import { createWriteStream } from "fs";
import { URL } from "../config/index.js";
import shortid from "shortid";

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = shortid.generate();
  let path = `uploads/${id}-${filename}`;
  await stream.pipe(createWriteStream(path));
  path = `${URL}/server/${path}`;
  return { filename, id, mimetype, path };
};

const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype } = await upload;
  console.log(filename, mimetype);
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype });
  return file;
};

const myCustomLabels = {
  docs: "posts",
  limit: "perPage",
  nextPage: "next",
  prevPage: "prev",
  meta: "paginator",
  page: "currentPage",
  pagingCounter: "slNo",
  totalDocs: "totalPosts",
  totalPages: "totalPages",
};

export default {
  Query: {
    getAllPosts: async (_, args, { isAuth }) => {
      console.log("ffff", isAuth);
      let posts = Post.find().populate("author");
      return posts;
    },
    getUserPosts: async (_, args, { user }) => {
      try {
        let posts = await Post.find({ author: user._id });
        console.log(posts);
        return posts;
      } catch (e) {
        throw new ApolloError(e.message);
      }
    },
    getPostById: async (_, { id }) => {
      try {
        let post = Post.findById(id);
        if (!post) {
          throw new Error("Post not found");
        }
        await (await post.populate("author")).execPopulate();
        return post;
      } catch (e) {
        throw new ApolloError(e.message);
      }
    },
    getPostByCategory: async (_, { category }) => {
      try {
        console.log("CCCC", category);
        let posts = await Post.find({ category: category }).populate("author");
        console.log(posts);
        return posts;
      } catch (e) {
        throw new ApolloError(e.message);
      }
    },
    getPostsByLimitAndPage: async (_, {}) => {
      const options = {
        page: page || 1,
        limit: limit || 10,
        sort: {
          createdAt: -1,
        },
        populate: "author",
        customLabels: myCustomLabels,
      };

      let post = await Post.paginate({}, options);
      console.log(post);
      return post;
    },
  },

  Mutation: {
    createNewPost: async (_, { newPost }, { user }) => {
      try {
        const { title, description, featureImage, price } = newPost;
        console.log("podtt", newPost);
        await NewPostvalidationRules.validate(
          { title, description, price },
          { abortEarly: false }
        );
        const upload = await processUpload(featureImage);
        console.log("bbbbb", upload);
        newPost.featureImage = await upload.path;
        console.log(user);
        const post = new Post({
          ...newPost,
          author: user.id,
        });
        let result = await post.save();
        await result.populate("author").execPopulate();
        return result;
      } catch (e) {
        throw new ApolloError(e.message);
      }
    },
    editPostByID: async (_, { args }, { user }) => {
      await NewPostvalidationRules.validate(updatedPost, {
        abortEarly: false,
      });
      try {
        const { post } = args;
        console.log(post);
        console.log("uu", user.id.toString());
        const postO = await Post.findOneAndUpdate(
          { _id: post.id, author: user.id.toString() },
          { ...post },
          {
            new: true,
          }
        );
        console.log("poat", postO);
        if (!postO) {
          throw new Error("unable to edit post");
        }
        return postO;
      } catch (e) {
        throw new ApolloError(e.message);
      }
    },
    deletePostById: async (_, { id }) => {
      try {
        const deletedPost = await Post.findOneAndDelete({
          _id: id,
          author: user.id.toString(),
        });
        if (!deletedPost) {
          throw new Error("unable delete post");
        }
        return {
          id: mm._id,
          success: true,
        };
      } catch (e) {
        throw new ApolloError(e.message);
      }
    },
  },
};
