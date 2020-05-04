# apollo-graphql-pokeapi

An GraphQL implementation of the PokeAPI using Apollo-GraphQL.

### Sample Query

```
{
  getPokemon(id: 249) {
    id
    name
    abilities {
      is_hidden
      ability {
        name
        url
      }
    }
    stats {
      base_stat
      stat {
        name
        url
      }
    }
  }
  getDescription(id: 249) {
    flavor_text
    language {
      name
      url
    }
    version {
      name
      url
    }
  }
}
```

**Notes**:

- `getDescription` returns Pokedex entries for Pokemon: Alpha Sapphire as the PokeAPI does not yet have Pokedex description data for Generation VII and above.

- This Graph API only contains a few data fields that I plan on consuming myself for a project. Feel free to contribute to adding extra fields by adding an issue or PR.
