import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { filesQuery } from "./Files";
import { CreateNewPost } from "./graphql/mutation";

export const Upload = () => {
  const [title, setTitle] = useState("le mee bebe bebe bebe ");
  const [content, setContent] = useState(" hehe eee eege egeege");
  const [image, setImage] = useState();

  const [createNewPost, { error, loading, data }] = useMutation(CreateNewPost);

  const onDrop = useCallback(([file]) => {
    const featureImage = file;
    console.log(featureImage);
    setImage(file);
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="outer">
      <div className="regularInputs">
        <input
          type="text"
          placeholder="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="content"
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div className="button">
        <button
          onClick={() => {
            const featureImage = image;
            createNewPost({
              variables: {
                title,
                content,
                featureImage,
              },
            });
          }}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};
