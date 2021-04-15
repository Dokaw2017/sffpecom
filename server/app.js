import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { PORT, IN_PROD } from "./config/index.js";
import connectMongo from "./db/db.js";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";

const app = express();

(async () => {
  try {
    const connect = await connectMongo();
    if (connect) {
      console.log("connected succesfully");
    }
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: IN_PROD,
      context: {},
    });

    server.applyMiddleware({ app });

    app.listen(PORT, () => console.log(`🚀 Server is ready on port ${PORT}`));
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();
