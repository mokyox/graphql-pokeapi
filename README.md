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

- `getDescription` returns Pokedex entries from _Pokemon: Alpha Sapphire_ for Generation I ~ VI Pokemon and _Pokemon: Ultra Sun_ entries for Generation VII Pokemon. The PokeAPI does not yet have Pokedex description data for Generation VIII and above - I will update when this happens. See GitHub issue [here](https://github.com/PokeAPI/pokeapi/issues/460).

- This Graph API only contains a few data fields that I plan on consuming myself for a project. Feel free to contribute to adding extra fields by adding an issue or PR.
