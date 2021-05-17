import { useCallback, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { EDIT_POST_BY_ID } from "../graphql/mutation";
import { Form, Button } from "semantic-ui-react";

const UpdatePost = (props) => {
  const id = props.match.params.id;
  console.log(id);
  const [title, setTitle] = useState("le mee bebe bebe bebe ");
  const [description, setDescription] = useState(" hehe eee eege egeege");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("clothes");

  const [updatePost, { data, error }] = useMutation(EDIT_POST_BY_ID, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });
  console.log(error);

  return (
    <div className="regularInputs">
      <Form>
        <h1>Edit Post</h1>
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
            onClick={(e) => {
              e.preventDefault();
              console.log(id);

              updatePost({
                variables: {
                  id,
                  title,
                  description,
                  price,
                  category,
                },
              });
              console.log(data);
            }}
          >
            Update Post
          </button>
        </div>
      </Form>
    </div>
  );
};

export default UpdatePost;
