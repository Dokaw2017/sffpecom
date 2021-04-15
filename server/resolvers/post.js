import Post from "../models/Post.js";

export default {
  Query: {
    getAllPosts: async (_, {}) => {
      let posts = Post.find();
      return posts;
    },
  },

  Mutation: {
    createNewPost: async (_, { newPost }) => {
      let result = await Post.create(newPost);

      return result;
    },
  },
};
