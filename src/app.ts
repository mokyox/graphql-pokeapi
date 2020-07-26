import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

export const App = (): express.Application => {
  const app = express();
  server.applyMiddleware({ app, path: "/graphql" });
  return app;
};
