import fetch from "node-fetch";
import { Resolvers, Description, Pokemon } from "../../types/resolvers";

export const resolvers: Resolvers = {
  Query: {
    getPokemon: async (
      _: unknown,
      { id }: { id: number }
    ): Promise<Pokemon> => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.json();
    },
    getDescription: async (
      _: unknown,
      { id }: { id: number }
    ): Promise<Description> => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );

      return response.json().then((data) => {
        return data.flavor_text_entries.find((text: Description) => {
          const { version, language } = text;
          return (
            language.name === "en" &&
            (version.name === "sword" || version.name === "alpha-sapphire")
          );
        });
      });
    },
  },
};
