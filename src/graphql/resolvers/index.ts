import axios from "axios";
import { Resolvers, Pokemon } from "../../types/resolvers";

export const resolvers: Resolvers = {
  Query: {
    getPokemon: async (parent, args, context, info): Promise<Pokemon> => {
      const pokemonData = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${args.id}`)
        .then((response) => {
          return response.data;
        });
      return pokemonData;
    },
  },
};
