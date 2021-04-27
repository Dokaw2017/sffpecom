import { gql } from "@apollo/client";

export const CreateNewPost = gql`
  mutation CreateNewPost(
    $title: String!
    $description: String!
    $price: String!
    $category: String!
    $featureImage: [Upload]!
  ) {
    createNewPost(
      newPost: {
        title: $title
        description: $description
        price: $price
        category: $category
        featureImage: $featureImage
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
