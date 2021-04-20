import Post from "../models/Post.js";
import { ApolloError } from "apollo-server-express";
import { NewPostvalidationRules } from "../validators/postValidator.js";

export default {
  Query: {
    getAllPosts: async (_, args, { isAuth }) => {
      console.log("ffff", isAuth);
      let posts = Post.find();
      return posts;
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
  },

  Mutation: {
    createNewPost: async (_, { newPost }, { user }) => {
      try {
        await NewPostvalidationRules.validate(newPost, { abortEarly: false });
        const post = new Post({ ...newPost, author: user.id });
        let result = await post.save();
        await result.populate("author").execPopulate();
        return result;
      } catch (e) {
        throw new ApolloError(e.message);
      }
    },
    editPostByID: async (_, { args }, { user }) => {
      try {
        await NewPostvalidationRules.validate(updatedPost, {
          abortEarly: false,
        });
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
