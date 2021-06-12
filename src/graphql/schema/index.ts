import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getPokemon(id: Int!): Pokemon
  }

  type Pokemon {
    id: Int!
    name: String!
    stats: [StatsData]
  }
  type Stats {
    name: String!
  }

  type StatsData {
    stat: Stats
    base_stat: Int!
  }
`;
