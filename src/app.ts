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

const port = process.env.PORT || 4000;
const app = express();
server.applyMiddleware({ app, path: "/graphql" });

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
