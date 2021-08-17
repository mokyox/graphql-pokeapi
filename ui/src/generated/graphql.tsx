import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Ability = {
  __typename?: 'Ability';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type AbilityData = {
  __typename?: 'AbilityData';
  ability?: Maybe<Ability>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Description = {
  __typename?: 'Description';
  flavor_text: Scalars['String'];
  language: LanguageData;
  version: VersionData;
};

export type LanguageData = {
  __typename?: 'LanguageData';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  id: Scalars['Int'];
  name: Scalars['String'];
  abilities?: Maybe<Array<Maybe<AbilityData>>>;
  stats?: Maybe<Array<Maybe<StatsData>>>;
  description?: Maybe<Array<Maybe<Description>>>;
};

export type Query = {
  __typename?: 'Query';
  getPokemon?: Maybe<Pokemon>;
  getDescription?: Maybe<Description>;
};


export type QueryGetPokemonArgs = {
  id: Scalars['Int'];
};


export type QueryGetDescriptionArgs = {
  id: Scalars['Int'];
};

export type Stats = {
  __typename?: 'Stats';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type StatsData = {
  __typename?: 'StatsData';
  stat: Stats;
  base_stat: Scalars['Int'];
};


export type VersionData = {
  __typename?: 'VersionData';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type GetPokemonQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPokemonQuery = { __typename?: 'Query', getPokemon?: Maybe<{ __typename?: 'Pokemon', id: number, name: string, abilities?: Maybe<Array<Maybe<{ __typename?: 'AbilityData', ability?: Maybe<{ __typename?: 'Ability', name: string }> }>>>, stats?: Maybe<Array<Maybe<{ __typename?: 'StatsData', base_stat: number, stat: { __typename?: 'Stats', name: string } }>>> }>, getDescription?: Maybe<{ __typename?: 'Description', flavor_text: string, language: { __typename?: 'LanguageData', name: string }, version: { __typename?: 'VersionData', name: string } }> };


export const GetPokemonDocument = gql`
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

/**
 * __useGetPokemonQuery__
 *
 * To run a query within a React component, call `useGetPokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPokemonQuery(baseOptions: Apollo.QueryHookOptions<GetPokemonQuery, GetPokemonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonQuery, GetPokemonQueryVariables>(GetPokemonDocument, options);
      }
export function useGetPokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonQuery, GetPokemonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonQuery, GetPokemonQueryVariables>(GetPokemonDocument, options);
        }
export type GetPokemonQueryHookResult = ReturnType<typeof useGetPokemonQuery>;
export type GetPokemonLazyQueryHookResult = ReturnType<typeof useGetPokemonLazyQuery>;
export type GetPokemonQueryResult = Apollo.QueryResult<GetPokemonQuery, GetPokemonQueryVariables>;