import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Coach: ResolverTypeWrapper<Coach>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ColorScheme: ResolverTypeWrapper<ColorScheme>;
  CreateCoachInput: CreateCoachInput;
  CreateColorSchemeInput: CreateColorSchemeInput;
  CreatePlayerInput: CreatePlayerInput;
  CreateTeamInput: CreateTeamInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Player: ResolverTypeWrapper<Player>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Team: ResolverTypeWrapper<Team>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateCoachInput: UpdateCoachInput;
  UpdateColorSchemeInput: UpdateColorSchemeInput;
  UpdatePlayerInput: UpdatePlayerInput;
  UpdateTeamInput: UpdateTeamInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Coach: Coach;
  String: Scalars['String'];
  ColorScheme: ColorScheme;
  CreateCoachInput: CreateCoachInput;
  CreateColorSchemeInput: CreateColorSchemeInput;
  CreatePlayerInput: CreatePlayerInput;
  CreateTeamInput: CreateTeamInput;
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Player: Player;
  Query: {};
  Redwood: Redwood;
  Team: Team;
  Time: Scalars['Time'];
  UpdateCoachInput: UpdateCoachInput;
  UpdateColorSchemeInput: UpdateColorSchemeInput;
  UpdatePlayerInput: UpdatePlayerInput;
  UpdateTeamInput: UpdateTeamInput;
  Boolean: Scalars['Boolean'];
};

export type CoachResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coach'] = ResolversParentTypes['Coach']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAssistant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorSchemeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ColorScheme'] = ResolversParentTypes['ColorScheme']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  primary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secondary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCoach?: Resolver<ResolversTypes['Coach'], ParentType, ContextType, RequireFields<MutationCreateCoachArgs, 'input'>>;
  createColorScheme?: Resolver<ResolversTypes['ColorScheme'], ParentType, ContextType, RequireFields<MutationCreateColorSchemeArgs, 'input'>>;
  createPlayer?: Resolver<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationCreatePlayerArgs, 'input'>>;
  createTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationCreateTeamArgs, 'input'>>;
  deleteCoach?: Resolver<ResolversTypes['Coach'], ParentType, ContextType, RequireFields<MutationDeleteCoachArgs, 'id'>>;
  deleteColorScheme?: Resolver<ResolversTypes['ColorScheme'], ParentType, ContextType, RequireFields<MutationDeleteColorSchemeArgs, 'id'>>;
  deletePlayer?: Resolver<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationDeletePlayerArgs, 'id'>>;
  deleteTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationDeleteTeamArgs, 'id'>>;
  updateCoach?: Resolver<ResolversTypes['Coach'], ParentType, ContextType, RequireFields<MutationUpdateCoachArgs, 'id' | 'input'>>;
  updateColorScheme?: Resolver<ResolversTypes['ColorScheme'], ParentType, ContextType, RequireFields<MutationUpdateColorSchemeArgs, 'id' | 'input'>>;
  updatePlayer?: Resolver<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationUpdatePlayerArgs, 'id' | 'input'>>;
  updateTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationUpdateTeamArgs, 'id' | 'input'>>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  coach?: Resolver<Maybe<ResolversTypes['Coach']>, ParentType, ContextType, RequireFields<QueryCoachArgs, 'id'>>;
  coaches?: Resolver<Array<ResolversTypes['Coach']>, ParentType, ContextType>;
  colorScheme?: Resolver<Maybe<ResolversTypes['ColorScheme']>, ParentType, ContextType, RequireFields<QueryColorSchemeArgs, 'id'>>;
  colorSchemes?: Resolver<Array<ResolversTypes['ColorScheme']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<QueryPlayerArgs, 'id'>>;
  players?: Resolver<Array<ResolversTypes['Player']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QueryTeamArgs, 'id'>>;
  teams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logoSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  conference?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  division?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  established?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coaches?: Resolver<Array<Maybe<ResolversTypes['Coach']>>, ParentType, ContextType>;
  colorScheme?: Resolver<Maybe<ResolversTypes['ColorScheme']>, ParentType, ContextType>;
  players?: Resolver<Array<Maybe<ResolversTypes['Player']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = any> = {
  Coach?: CoachResolvers<ContextType>;
  ColorScheme?: ColorSchemeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  Time?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
