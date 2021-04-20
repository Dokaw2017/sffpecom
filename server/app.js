import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { PORT, IN_PROD } from "./config/index.js";
import connectMongo from "./db/db.js";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";
import AuthMiddleware from "./middlewares/auth.js";
import { schemaDirectives } from "./directives/index.js";

const app = express();

(async () => {
  try {
    const connect = await connectMongo();
    if (connect) {
      console.log("connected succesfully");
    }

    app.use(express.json());
    app.use(AuthMiddleware);
    app.use("/server/uploads", express.static("./server/uploads"));
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      schemaDirectives,
      playground: IN_PROD,
      context: ({ req }) => {
        let { isAuth, user } = req;

        return {
          req,
          isAuth,
          user,
        };
      },
    });

    server.applyMiddleware({ app });

    app.listen(PORT, () => console.log(`🚀 Server is ready on port ${PORT}`));
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();
