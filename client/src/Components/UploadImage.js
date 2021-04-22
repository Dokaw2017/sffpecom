/* import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";

export default function UploadImage() {
  const [ImageSelected, setImageSelected] = useState(null);
  //MUTATION DECLARED IN BACKEND
  const UPLOAD_IMAGE = gql`
    mutation imageUploader($file: Upload) {
      singleUpload(file: $file)
    }
  `;
  const [addTodo, { data }] = useMutation(UPLOAD_IMAGE);
  console.log(data);
  return (
    <div>
      <h2>Upload Images with React JS</h2>
      <input
        type="file"
        name="image"
        onChange={(e) => setImageSelected(e.target.files[0])}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTodo({ variables: { file: ImageSelected } });
        }}
      >
        Save image
      </button>
    </div>
  );
} */

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const UploadMutation = gql`
  mutation imageUploader($file: Upload!) {
    imageUploader(file: $file) {
      path
      id
      filename
      mimetype
    }
  }
`;

const FileUpload = () => {
  const [imageUploader] = useMutation(UploadMutation);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // do something here
      console.log(acceptedFiles);
      const file = acceptedFiles[0];
      imageUploader({
        // use the variables option so that you can pass in the file we got above
        variables: { file },
        onCompleted: () => {},
      });
    },
    [imageUploader]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive && "isActive"}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
};
export default FileUpload;
