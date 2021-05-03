import React, { useCallback, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { CreateNewPost } from "../graphql/mutation";
import { Form, Button } from "semantic-ui-react";

export const Upload = () => {
  const [title, setTitle] = useState("le mee bebe bebe bebe ");
  const [description, setDescription] = useState(" hehe eee eege egeege");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("clothes");
  const [file, setFile] = useState();
  const id = localStorage.getItem("id");

  const [createNewPost, { error, loading, data }] = useMutation(CreateNewPost, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });

  return (
    <div className="regularInputs">
      <Form>
        <h1>Create Post</h1>
        <input
          type="text"
          placeholder="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="price"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="file"
          name="picture"
          onChange={async (event) => {
            await setFile(event.target.files[0]);
          }}
        />
        <select
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="clothes">Clothes</option>
          <option value="electronics">Electronics</option>
          <option value="foods">Foods</option>
          <option value="furniture">Furniture</option>
          <option value="cars">Vehicles</option>
        </select>

        <div className="button">
          <button
            onClick={() => {
              const featureImage = [];
              featureImage.push(file);

              createNewPost({
                variables: {
                  title,
                  description,
                  price,
                  category,
                  featureImage,
                  id,
                },
              });
            }}
          >
            Create Post
          </button>
        </div>
      </Form>
    </div>
  );
};
