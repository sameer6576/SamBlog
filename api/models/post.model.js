import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://www.travelpayouts.com/blog/wp-content/uploads/2021/02/blog-images.png",
    },
    catergory: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
