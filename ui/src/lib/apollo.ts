import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://pokemon-graphql-mo.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
