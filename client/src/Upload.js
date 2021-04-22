import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { filesQuery } from "./Files";

const CreateNewPost = gql`
  mutation createNewPost(
    $title: String!
    $content: String!
    $featureImage: Upload
  ) {
    createNewPost(
      newPost: { title: $title, content: $content, featureImage: $featureImage }
    ) {
      title
      content
    }
  }
`;
/* 
const uploadFileMutation = gql`
  mutation imageUploader($file: Upload!) {
    uploadFile(file: $file)
  }
`;
 */
export const Upload = () => {
  let title = "dd dfdf dfd df dd";
  let content = "sds sds sd sd sd sd sdddd";
  const [createNewPost, { error, loading, data }] = useMutation(CreateNewPost);
  console.log("err", error);
  console.log("data", data);
  const onDrop = useCallback(
    ([file]) => {
      const featureImage = file;
      console.log(featureImage);
      createNewPost({ variables: { title, content, featureImage } });
      console.log(file, title, content);
    }
    //[createNewPost]
  );

  /*   const onDrop = (file) => {
    console.log(file);
    const featureImage = file;
    createNewPost({ variables: { title, content, featureImage } });
  }; */
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};
