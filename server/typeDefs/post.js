import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllPosts: [Post!]!
    getPostById(id: ID!): Post!
    getPostsByLimitAndPage(page: Int, limit: Int): PostPaginator
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

  type PostPaginator {
    posts: [Post!]!
    paginator: PostLables
  }

  type PostLables {
    postCount: Int!
    slNo: Int!
    prev: Int!
    next: Int!
    perPage: Int!
    totalPosts: Int!
    totalPages: Int!
    currentPage: Int!
    hasPrevPage: Boolean!
    hasNextPage: Boolean!
  }
  type PostNotification {
    id: ID!
    message: String!
    success: Boolean!
  }
`;
