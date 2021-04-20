import mongoose from "mongoose";
import paginator from "mongoose-paginate-v2";

const { Schema } = mongoose;

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
    author: {
      ref: "users",
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

postSchema.plugin(paginator);

export default mongoose.model("posts", postSchema);
