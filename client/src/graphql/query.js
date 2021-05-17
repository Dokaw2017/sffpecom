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
  query {
    authUserProfile {
      username
      email
      id
    }
  }
`;

export const POST_BY_ID = gql`
  query getPostById($id: ID!) {
    getPostById(id: $id) {
      id
      title
      description
      category
      price
      createdAt
      featureImage
      updatedAt
    }
  }
`;

export const GET_All_POSTS = gql`
  query {
    getAllPosts {
      id
      title
      description
      price
      category
      featureImage
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_POSTS = gql`
  query {
    getUserPosts {
      id
      title
      description
      price
      category
      featureImage
      createdAt
      updatedAt
    }
  }
`;

export const Get_Post_By_Category = gql`
  query($category: String!) {
    getPostByCategory(category: $category) {
      id
      title
      description
      price
      createdAt
      featureImage
      updatedAt
    }
  }
`;
