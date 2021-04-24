import { gql } from "@apollo/client";

export const CreateNewPost = gql`
  mutation CreateNewPost(
    $title: String!
    $content: String!
    $featureImage: Upload
  ) {
    createNewPost(
      newPost: { title: $title, content: $content, featureImage: $featureImage }
    ) {
      title
      content
      featureImage
    }
  }
`;

export const REGISTER_NEW_USER = gql`
  mutation registerUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $avatarImage: String
  ) {
    registerUser(
      newUser: {
        username: $username
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        avatarImage: $avatarImage
      }
    ) {
      token
      user {
        id
        username
        email
        firstName
        lastName
        avatarImage
      }
    }
  }
`;
