import { useQuery, gql } from "@apollo/client";
import { Box, Spinner, Stack, Text, Image, Center } from "@chakra-ui/react";
import { Fragment } from "react";

import { Hero } from "./Hero";

const GET_POKEMON = gql`
  query getPokemon($id: Int!) {
    getPokemon(id: $id) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
    getDescription(id: $id) {
      flavor_text
      language {
        name
      }
      version {
        name
      }
    }
  }
`;

export default function PokemonCard(): React.ReactElement {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { id: 490 },
  });

  if (loading)
    return (
      <Stack marginTop="100px" direction="row" spacing={4}>
        <Spinner size="xl" />
      </Stack>
    );
  if (error) {
    console.error(error);
  }

  const pokemonStats = data.getPokemon.stats.map((stat) => {
    return (
      <div key={stat.stat.name}>
        <Text as="span"> {stat.stat.name}: </Text>
        <Text as="span">{stat.base_stat} </Text>
      </div>
    );
  });

  const pokemonAbilities = data.getPokemon.abilities
    .map((ability) => ability.ability.name)
    .join(" / ");

  return (
    <Box marginTop="100px" borderRadius="lg" padding="2rem">
      <Hero title={data.getPokemon.name} />

      <Text fontSize="xl" textAlign="center" textTransform="capitalize">
        #{data.getPokemon.id}
      </Text>
      <Center>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.getPokemon.id}.png?raw=true`}
          alt={data.getPokemon.name}
        ></Image>
      </Center>

      <Text fontWeight="bold" textAlign="center" textTransform="capitalize">
        Abilities: {pokemonAbilities}
      </Text>

      <Box textAlign="center" textTransform="capitalize">
        {pokemonStats}
      </Box>

      <Box textAlign="center" mt="2" as="h4" lineHeight="tight">
        {data.getDescription.flavor_text}
      </Box>
    </Box>
  );
}
