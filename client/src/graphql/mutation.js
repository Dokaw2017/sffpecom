import { gql } from "@apollo/client";

export const CreateNewPost = gql`
  mutation CreateNewPost(
    $title: String!
    $description: String!
    $price: String!
    $category: String!
    $featureImage: [Upload]!
    $id: ID!
  ) {
    createNewPost(
      newPost: {
        title: $title
        description: $description
        price: $price
        category: $category
        featureImage: $featureImage
        author: $id
      }
    ) {
      title
      description
      price
      category
      featureImage
    }
  }
`;

export const REGISTER_NEW_USER = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      newUser: { username: $username, email: $email, password: $password }
    ) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const DELETE_POST_BY_ID = gql`
  mutation deletePostById($id: ID!, $owner: ID!) {
    deletePostById(id: $id, owner: $owner) {
      message
      success
    }
  }
`;

export const EDIT_POST_BY_ID = gql`
  mutation updatePost(
    $id: ID!
    $title: String
    $description: String
    $category: String
    $price: String
  ) {
    updatePost(
      post: {
        id: $id
        title: $title
        description: $description
        category: $category
        price: $price
      }
    ) {
      id
    }
  }
`;
