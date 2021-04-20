import { ApolloError } from "apollo-server-express";
import { hash, compare } from "bcrypt";
import User from "../models/User.js";
import { issueToken, serializeUser } from "../utils/authjwt.js";

export default {
  Query: {
    authUserProfile: async (_, {}, { user }) => user,
    authenticateUser: async (_, { username, password }) => {
      try {
        //check if the user is alraedy taken
        let user = await User.findOne({ username });
        //check for the password
        let isMach = await compare(password, user.password);
        if (!isMach) {
          throw new Error("Invalid Password");
        }

        //Serialize úser
        user = user.toObject();
        user.id = user._id;
        user = serializeUser(user);
        //now issue the token
        let token = await issueToken(user);
        return {
          user,
          token,
        };
      } catch (err) {
        throw new ApolloError(err.message, 403);
      }
    },
  },
  Mutation: {
    registerUser: async (_, { newUser }) => {
      try {
        let { username, email } = newUser;
        let user;
        //check if the user is alraedy taken
        user = await User.findOne({ username });
        if (user) {
          throw new Error("Username is already taken");
        }
        //check if the email is taken
        user = await User.findOne({ email });
        if (user) {
          throw new Error("Email is alraedy registered");
        }
        //create new user instance
        user = new User(newUser);
        //hash the password
        user.password = await hash(newUser.password, 10);
        //save the user to the database
        let result = await user.save();
        //Issue the authentication token
        result = result.toObject();
        result.id = result._id;
        result = serializeUser(result);
        let token = await issueToken(result);
        return {
          token,
          user: result,
        };
      } catch (err) {
        throw new ApolloError(err.message, 400);
      }
    },
  },
};
