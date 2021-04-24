import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
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

export const GET_CURRENT_USER = gql`
  {
    authUserProfile {
      username
      email
    }
  }
`;
