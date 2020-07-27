import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../graphql/schema/";
import { resolvers } from "../graphql/resolvers";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});
