# apollo-graphql-pokeapi

An GraphQL implementation of the PokeAPI using Apollo-GraphQL (version for code-talk)

### Sample Query

```
{
  getPokemon(id: 249) {
    id
    name
    stats {
      base_stat
      stat {
        name
      }
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
    }
  }
}
```
