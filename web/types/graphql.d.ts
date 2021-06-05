export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type Coach = {
  __typename?: 'Coach';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  handle: Scalars['String'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
};

export type ColorScheme = {
  __typename?: 'ColorScheme';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
};

export type CreateCoachInput = {
  handle: Scalars['String'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
};

export type CreateColorSchemeInput = {
  primary: Scalars['String'];
  secondary: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
};

export type CreatePlayerInput = {
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  height: Scalars['String'];
  weight: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
};

export type CreateTeamInput = {
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  city: Scalars['String'];
  abbreviation: Scalars['String'];
  logo: Scalars['String'];
  logoSlug: Scalars['String'];
  wins?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  conference: Scalars['String'];
  division: Scalars['String'];
  established: Scalars['String'];
};





export type Mutation = {
  __typename?: 'Mutation';
  createCoach: Coach;
  createColorScheme: ColorScheme;
  createPlayer: Player;
  createTeam: Team;
  deleteCoach: Coach;
  deleteColorScheme: ColorScheme;
  deletePlayer: Player;
  deleteTeam: Team;
  updateCoach: Coach;
  updateColorScheme: ColorScheme;
  updatePlayer: Player;
  updateTeam: Team;
};


export type MutationCreateCoachArgs = {
  input: CreateCoachInput;
};


export type MutationCreateColorSchemeArgs = {
  input: CreateColorSchemeInput;
};


export type MutationCreatePlayerArgs = {
  input: CreatePlayerInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationDeleteCoachArgs = {
  id: Scalars['String'];
};


export type MutationDeleteColorSchemeArgs = {
  id: Scalars['String'];
};


export type MutationDeletePlayerArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCoachArgs = {
  id: Scalars['String'];
  input: UpdateCoachInput;
};


export type MutationUpdateColorSchemeArgs = {
  id: Scalars['String'];
  input: UpdateColorSchemeInput;
};


export type MutationUpdatePlayerArgs = {
  id: Scalars['String'];
  input: UpdatePlayerInput;
};


export type MutationUpdateTeamArgs = {
  id: Scalars['String'];
  input: UpdateTeamInput;
};

export type Player = {
  __typename?: 'Player';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  height: Scalars['String'];
  weight: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
};

export type Query = {
  __typename?: 'Query';
  coach?: Maybe<Coach>;
  coaches: Array<Coach>;
  colorScheme?: Maybe<ColorScheme>;
  colorSchemes: Array<ColorScheme>;
  player?: Maybe<Player>;
  players: Array<Player>;
  redwood?: Maybe<Redwood>;
  team?: Maybe<Team>;
  teams: Array<Team>;
};


export type QueryCoachArgs = {
  id: Scalars['String'];
};


export type QueryColorSchemeArgs = {
  id: Scalars['String'];
};


export type QueryPlayerArgs = {
  id: Scalars['String'];
};


export type QueryTeamArgs = {
  id: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  city: Scalars['String'];
  abbreviation: Scalars['String'];
  logo: Scalars['String'];
  logoSlug: Scalars['String'];
  wins?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  conference: Scalars['String'];
  division: Scalars['String'];
  established: Scalars['String'];
  coaches: Array<Maybe<Coach>>;
  colorScheme?: Maybe<ColorScheme>;
  players: Array<Maybe<Player>>;
};


export type UpdateCoachInput = {
  handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
};

export type UpdateColorSchemeInput = {
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
};

export type UpdatePlayerInput = {
  handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
};

export type UpdateTeamInput = {
  handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  logoSlug?: Maybe<Scalars['String']>;
  wins?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  conference?: Maybe<Scalars['String']>;
  division?: Maybe<Scalars['String']>;
  established?: Maybe<Scalars['String']>;
};

export type DeleteCoachMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCoachMutation = (
  { __typename?: 'Mutation' }
  & { deleteCoach: (
    { __typename?: 'Coach' }
    & Pick<Coach, 'id'>
  ) }
);

export type Find_Coach_By_IdVariables = Exact<{
  id: Scalars['String'];
}>;


export type Find_Coach_By_Id = (
  { __typename?: 'Query' }
  & { coach?: Maybe<(
    { __typename?: 'Coach' }
    & Pick<Coach, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'type' | 'isAssistant' | 'teamId'>
  )> }
);

export type CoachesVariables = Exact<{ [key: string]: never; }>;


export type Coaches = (
  { __typename?: 'Query' }
  & { coaches: Array<(
    { __typename?: 'Coach' }
    & Pick<Coach, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'type' | 'isAssistant' | 'teamId'>
  )> }
);

export type DeleteColorSchemeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteColorSchemeMutation = (
  { __typename?: 'Mutation' }
  & { deleteColorScheme: (
    { __typename?: 'ColorScheme' }
    & Pick<ColorScheme, 'id'>
  ) }
);

export type Find_Color_Scheme_By_IdVariables = Exact<{
  id: Scalars['String'];
}>;


export type Find_Color_Scheme_By_Id = (
  { __typename?: 'Query' }
  & { colorScheme?: Maybe<(
    { __typename?: 'ColorScheme' }
    & Pick<ColorScheme, 'id' | 'createdAt' | 'updatedAt' | 'primary' | 'secondary' | 'teamId'>
  )> }
);

export type Color_SchemesVariables = Exact<{ [key: string]: never; }>;


export type Color_Schemes = (
  { __typename?: 'Query' }
  & { colorSchemes: Array<(
    { __typename?: 'ColorScheme' }
    & Pick<ColorScheme, 'id' | 'createdAt' | 'updatedAt' | 'primary' | 'secondary' | 'teamId'>
  )> }
);

export type UpdateCoachMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateCoachInput;
}>;


export type UpdateCoachMutation = (
  { __typename?: 'Mutation' }
  & { updateCoach: (
    { __typename?: 'Coach' }
    & Pick<Coach, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'type' | 'isAssistant' | 'teamId'>
  ) }
);

export type UpdateColorSchemeMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateColorSchemeInput;
}>;


export type UpdateColorSchemeMutation = (
  { __typename?: 'Mutation' }
  & { updateColorScheme: (
    { __typename?: 'ColorScheme' }
    & Pick<ColorScheme, 'id' | 'createdAt' | 'updatedAt' | 'primary' | 'secondary' | 'teamId'>
  ) }
);

export type Find_Player_By_IdVariables = Exact<{
  id: Scalars['String'];
}>;


export type Find_Player_By_Id = (
  { __typename?: 'Query' }
  & { player?: Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'height' | 'weight' | 'number' | 'position' | 'teamId'>
  )> }
);

export type UpdatePlayerMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdatePlayerInput;
}>;


export type UpdatePlayerMutation = (
  { __typename?: 'Mutation' }
  & { updatePlayer: (
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'height' | 'weight' | 'number' | 'position' | 'teamId'>
  ) }
);

export type Find_Team_By_IdVariables = Exact<{
  id: Scalars['String'];
}>;


export type Find_Team_By_Id = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'city' | 'abbreviation' | 'logo' | 'logoSlug' | 'wins' | 'losses' | 'winPercentage' | 'conference' | 'division' | 'established'>
  )> }
);

export type UpdateTeamMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateTeamInput;
}>;


export type UpdateTeamMutation = (
  { __typename?: 'Mutation' }
  & { updateTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'city' | 'abbreviation' | 'logo' | 'logoSlug' | 'wins' | 'losses' | 'winPercentage' | 'conference' | 'division' | 'established'>
  ) }
);

export type CreateCoachMutationVariables = Exact<{
  input: CreateCoachInput;
}>;


export type CreateCoachMutation = (
  { __typename?: 'Mutation' }
  & { createCoach: (
    { __typename?: 'Coach' }
    & Pick<Coach, 'id'>
  ) }
);

export type CreateColorSchemeMutationVariables = Exact<{
  input: CreateColorSchemeInput;
}>;


export type CreateColorSchemeMutation = (
  { __typename?: 'Mutation' }
  & { createColorScheme: (
    { __typename?: 'ColorScheme' }
    & Pick<ColorScheme, 'id'>
  ) }
);

export type CreatePlayerMutationVariables = Exact<{
  input: CreatePlayerInput;
}>;


export type CreatePlayerMutation = (
  { __typename?: 'Mutation' }
  & { createPlayer: (
    { __typename?: 'Player' }
    & Pick<Player, 'id'>
  ) }
);

export type CreateTeamMutationVariables = Exact<{
  input: CreateTeamInput;
}>;


export type CreateTeamMutation = (
  { __typename?: 'Mutation' }
  & { createTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  ) }
);

export type DeletePlayerMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePlayerMutation = (
  { __typename?: 'Mutation' }
  & { deletePlayer: (
    { __typename?: 'Player' }
    & Pick<Player, 'id'>
  ) }
);

export type PlayersVariables = Exact<{ [key: string]: never; }>;


export type Players = (
  { __typename?: 'Query' }
  & { players: Array<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'height' | 'weight' | 'number' | 'position' | 'teamId'>
  )> }
);

export type DeleteTeamMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTeamMutation = (
  { __typename?: 'Mutation' }
  & { deleteTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  ) }
);

export type TeamsVariables = Exact<{ [key: string]: never; }>;


export type Teams = (
  { __typename?: 'Query' }
  & { teams: Array<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'city' | 'abbreviation' | 'logo' | 'logoSlug' | 'wins' | 'losses' | 'winPercentage' | 'conference' | 'division' | 'established'>
  )> }
);
