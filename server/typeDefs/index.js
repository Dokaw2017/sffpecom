import { gql } from "apollo-server-express";
import post from "./post.js";
import image from "./image.js";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, post, image];
