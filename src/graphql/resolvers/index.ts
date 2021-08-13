import axios, { AxiosResponse } from "axios";

import {
  Resolvers,
  Description,
  Pokemon,
  LanguageData,
  VersionData,
} from "../../types/resolvers";

export const resolvers: Resolvers = {
  Query: {
    getPokemon: async (_, { id }: { id: number }): Promise<Pokemon> => {
      const pokemonData = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response: AxiosResponse<Pokemon>) => {
          return response.data;
        });
      return pokemonData;
    },
    getDescription: async (_, { id }: { id: number }): Promise<Description> => {
      const description = await axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((response: AxiosResponse) => {
          return response.data.flavor_text_entries.filter(
            (text: { language: LanguageData; version: VersionData }) => {
              const { language, version } = text;

              //Not all Pokemon have Pokedex entries for Gen 7 or Gen 8 so
              // need to fallback to Gen 6 (Omega Ruby/Alpha Sapphire)

              if (language.name === "en") {
                return (
                  version.name === "sword" || version.name === "alpha-sapphire"
                );
              }
            }
          );
        });

      //If Pokemon has Gen 8 descriptions, use the Gen 8 entry
      //If Pokemon doesn't have Gen 8 descriptions, use the Gen 6 entry

      const pokemonDescription =
        description.length > 1 ? description[1] : description[0];

      return pokemonDescription;
    },
  },
};
