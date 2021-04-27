import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  {
    authUserProfile {
      username
      email
    }
  }
`;

export const GET_All_POSTS = gql`
  {
    getAllPosts {
      id
      title
      description
      price
      featureImage
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_POSTS = gql`
  {
    getUserPosts {
      id
      title
      description
      price
      featureImage
      createdAt
      updatedAt
    }
  }
`;
