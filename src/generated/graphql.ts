import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String'];
  user?: Maybe<User>;
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['ID'];
  description: Scalars['String'];
  url: Scalars['String'];
  postedBy?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<AuthPayload>;
  signin?: Maybe<AuthPayload>;
  post: Link;
  updateLink?: Maybe<Link>;
  deleteLink?: Maybe<Link>;
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSigninArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPostArgs = {
  url: Scalars['String'];
  description: Scalars['String'];
};


export type MutationUpdateLinkArgs = {
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type MutationDeleteLinkArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  feed: Array<Link>;
  refreshAccessToken?: Maybe<AuthPayload>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  links: Array<Link>;
};

export type SignupMutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type SignupMutationMutation = { __typename?: 'Mutation', signup?: Maybe<{ __typename?: 'AuthPayload', accessToken: string, user?: Maybe<{ __typename?: 'User', id: string, username: string, email: string }> }> };

export type SigninMutationMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type SigninMutationMutation = { __typename?: 'Mutation', signin?: Maybe<{ __typename?: 'AuthPayload', accessToken: string, user?: Maybe<{ __typename?: 'User', id: string, username: string, email: string }> }> };

export type GetFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeedQuery = { __typename?: 'Query', feed: Array<{ __typename?: 'Link', id: string, description: string, url: string, postedBy?: Maybe<{ __typename?: 'User', id: string, username: string }> }> };

export type RefreshAccessTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshAccessTokenQuery = { __typename?: 'Query', refreshAccessToken?: Maybe<{ __typename?: 'AuthPayload', accessToken: string, user?: Maybe<{ __typename?: 'User', id: string, username: string, email: string }> }> };


export const SignupMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignupMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<SignupMutationMutation, SignupMutationMutationVariables>;
export const SigninMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SigninMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<SigninMutationMutation, SigninMutationMutationVariables>;
export const GetFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"postedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetFeedQuery, GetFeedQueryVariables>;
export const RefreshAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RefreshAccessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshAccessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<RefreshAccessTokenQuery, RefreshAccessTokenQueryVariables>;