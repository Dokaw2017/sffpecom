import { gql } from "apollo-server-express";
import post from "./post.js";
import user from "./user.js";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, post, user];
