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
      }
    }
    stats {
      base_stat
      stat {
        name
      }
    }
  }
  getDescription(id: 249) {
    flavor_text
    language {
      name
    }
    version {
      name
    }
  }
}
```

### Sample Result

```
{
  "data": {
    "getPokemon": {
      "id": 249,
      "name": "lugia",
      "abilities": [
        {
          "is_hidden": false,
          "ability": {
            "name": "pressure"
          }
        },
        {
          "is_hidden": true,
          "ability": {
            "name": "multiscale"
          }
        }
      ],
      "stats": [
        {
          "base_stat": 106,
          "stat": {
            "name": "hp"
          }
        },
        {
          "base_stat": 90,
          "stat": {
            "name": "attack"
          }
        },
        {
          "base_stat": 130,
          "stat": {
            "name": "defense"
          }
        },
        {
          "base_stat": 90,
          "stat": {
            "name": "special-attack"
          }
        },
        {
          "base_stat": 154,
          "stat": {
            "name": "special-defense"
          }
        },
        {
          "base_stat": 110,
          "stat": {
            "name": "speed"
          }
        }
      ]
    },
    "getDescription": {
      "flavor_text": "Lugia’s wings pack devastating power—a light fluttering of its\nwings can blow apart regular houses. As a result, this\nPokémon chooses to live out of sight deep under the sea.",
      "language": {
        "name": "en"
      },
      "version": {
        "name": "alpha-sapphire"
      }
    }
  }
}
```

**Notes**:

- `getDescription` returns Pokedex entries from _Pokemon: Alpha Sapphire_ for Generation I ~ VI Pokemon and _Pokemon: Ultra Sun_ entries for Generation VII Pokemon. The PokeAPI does not yet have Pokedex description data for Generation VIII and above - I will update when this happens. See GitHub issue [here](https://github.com/PokeAPI/pokeapi/issues/460).

- This Graph API only contains a few data fields that I plan on consuming myself for a project. Feel free to contribute to adding extra fields by adding an issue or PR.
