import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllPosts: [Post!]!
    getPostById(id: ID!): Post!
  }
  extend type Mutation {
    createNewPost(newPost: PostInput): Post! @isAuth
    editPostByID(updatedPost: PostInput, id: ID!): Post! @isAuth
    deletePostById(id: ID!): PostNotification @isAuth
  }
  input PostInput {
    title: String!
    content: String!
    featureImage: String
  }
  type Post {
    id: ID!
    title: String!
    content: String!
    featureImage: String
    createdAt: String
    updatedAt: String
    author: User
  }
  type PostNotification {
    id: ID!
    message: String!
    success: Boolean!
  }
`;
