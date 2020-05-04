import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getPokemon(id: Int!): Pokemon
    getDescription(id: Int!): Description
  }

  type Pokemon {
    id: Int
    name: String
    abilities: [AbilityData]
    stats: [StatsData]
    description: [Description]
  }

  type Ability {
    name: String
    url: String
  }

  type AbilityData {
    ability: Ability
    is_hidden: Boolean!
  }

  type Stats {
    name: String
    url: String
  }

  type StatsData {
    stat: Stats
    base_stat: Int
  }

  type Description {
    flavor_text: String
    language: LanguageData
    version: VersionData
  }

  type LanguageData {
    name: String
    url: String
  }

  type VersionData {
    name: String
    url: String
  }
`;
