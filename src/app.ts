import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../src/graphql/schema/";
import { resolvers } from "../src/graphql/resolvers/";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const port = process.env.PORT || 4000;
const app = express();
server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
