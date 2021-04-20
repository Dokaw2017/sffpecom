import Post from "../models/Post.js";

export default {
  Query: {
    getAllPosts: async (_, {}) => {
      let posts = Post.find();
      return posts;
    },
    getPostById: async (_, { id }) => {
      let post = Post.findById(id);

      return post;
    },
  },

  Mutation: {
    createNewPost: async (_, { newPost }) => {
      let result = await Post.create(newPost);

      return result;
    },
    editPostByID: async (_, { id, updatedPost }) => {
      let editedPost = await Post.findByIdAndUpdate(
        id,
        { ...updatedPost },
        { new: true }
      );
      return editedPost;
    },
    deletePostById: async (_, { id }) => {
      console.log("mmmm", id);
      let deletedPost = Post.findByIdAndDelete(id);
      return {
        id: deletedPost.id,
        message: "Your post has been deleted succesfully",
        success: true,
      };
    },
  },
};
