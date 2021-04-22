import { useState } from "react";
import { Upload } from "../Upload";

const PostInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am clicked");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
      </label>
      <br />
      <label>
        Content:
        <input onChange={(e) => setContent(e.target.value)} type="text" />
      </label>
      <button type="submit">Submit</button>
      <Upload />
    </form>
  );
};

export default PostInput;
