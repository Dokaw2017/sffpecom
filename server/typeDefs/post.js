import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllPosts: [Post]
    getPostById(id: ID!): Post!
    getPostsByLimitAndPage(page: Int, limit: Int): PostPaginator
    getUserPosts: [Post] @isAuth
    getPostByCategory(category: String!): [Post]
  }
  extend type Mutation {
    createNewPost(newPost: NewPostInput): Post!
    editPostByID(updatedPost: UpdatePostInput, id: ID!): Post! @isAuth
    deletePostById(id: ID!): PostNotification @isAuth
  }
  input NewPostInput {
    title: String!
    description: String!
    price: String!
    category: String!
    featureImage: [Upload]!
  }
  type Post {
    id: ID!
    title: String!
    description: String!
    category: String!
    price: String!
    featureImage: [String]
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

  input UpdatePostInput {
    id: ID!
    title: String
    description: String
    price: String
    category: String
    featuredImage: [String]
    createdAt: String
    updatedAt: String
  }

  type PostNotification {
    id: ID!
    message: String!
    success: Boolean!
  }
`;
