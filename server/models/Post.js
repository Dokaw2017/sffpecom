import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    featureImage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("posts", postSchema);

export default Post;
