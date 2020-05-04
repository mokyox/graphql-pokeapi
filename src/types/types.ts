export type Pokemon = {
  id: number;
  name: string;
  abilities: [AbilityData];
};

export type Ability = {
  name: string;
  url: string;
};

export type AbilityData = {
  ability: Ability;
  is_hidden: boolean;
};

export type Stats = {
  name: string;
  url: string;
};

export type StatsData = {
  stat: Stats;
  base_stat: number;
};

export type Description = {
  flavor_text: string;
  language: LanguageData;
  version: VersionData;
};

export type LanguageData = {
  name: string;
  url: string;
};

export type VersionData = {
  name: string;
  url: string;
};
