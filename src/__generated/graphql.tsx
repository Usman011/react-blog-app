import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Float']['output'];
  parent?: Maybe<Comment>;
  post: Post;
  replies?: Maybe<Array<Comment>>;
  text?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type CommentInput = {
  postId?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addReplyToComment: Comment;
  createComment: Comment;
  createPost: SuccessResponse;
  deleteCommentByPost: SuccessResponse;
  deletePost: SuccessResponse;
  login: LoginResponse;
  register: LoginResponse;
  updateComment: SuccessResponse;
  updatePost: SuccessResponse;
};


export type MutationAddReplyToCommentArgs = {
  data: ReplyInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationDeleteCommentByPostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  loginData: LoginInput;
};


export type MutationRegisterArgs = {
  createUser: UserInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['Int']['input'];
};

export type Post = {
  __typename?: 'Post';
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  status: PostStatus;
  title: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type PostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export enum PostStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  Comment: Comment;
  getComment: Array<Comment>;
  getPost: Post;
  getRepliesOfComment: Array<Comment>;
  hello: Scalars['String']['output'];
  listComments: Array<Comment>;
  listPosts: Array<Post>;
  paginatedPosts: Array<Post>;
  search: Array<Post>;
  user: User;
};


export type QueryCommentArgs = {
  postId: Scalars['Int']['input'];
};


export type QueryGetCommentArgs = {
  itemsPerPage?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  postId: Scalars['Int']['input'];
};


export type QueryGetPostArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetRepliesOfCommentArgs = {
  commentId: Scalars['Int']['input'];
  itemsPerPage?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};


export type QueryPaginatedPostsArgs = {
  itemsPerPage?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};


export type QuerySearchArgs = {
  input: Scalars['String']['input'];
};


export type QueryUserArgs = {
  email: Scalars['String']['input'];
};

export type ReplyInput = {
  commentId?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  id?: Maybe<Scalars['Float']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  posts: Array<Post>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserMutationVariables = Exact<{
  createUser: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', register: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } } };

export type LoginMutationVariables = Exact<{
  loginData: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } } };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', email: string, id: number, firstName: string, lastName: string } };

export type PaginatedPostsQueryVariables = Exact<{
  itemsPerPage: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;


export type PaginatedPostsQuery = { __typename?: 'Query', paginatedPosts: Array<{ __typename?: 'Post', content: string, id: number, status: PostStatus, title: string, user?: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } | null }> };


export const CreateUserDocument = gql`
    mutation CreateUser($createUser: UserInput!) {
  register(createUser: $createUser) {
    token
    user {
      email
      firstName
      id
      lastName
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUser: // value for 'createUser'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation login($loginData: LoginInput!) {
  login(loginData: $loginData) {
    token
    user {
      email
      firstName
      id
      lastName
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginData: // value for 'loginData'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetUserDocument = gql`
    query getUser($email: String!) {
  user(email: $email) {
    email
    id
    firstName
    lastName
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const PaginatedPostsDocument = gql`
    query PaginatedPosts($itemsPerPage: Int!, $page: Int!) {
  paginatedPosts(itemsPerPage: $itemsPerPage, page: $page) {
    content
    id
    status
    title
    user {
      email
      firstName
      id
      lastName
    }
  }
}
    `;

/**
 * __usePaginatedPostsQuery__
 *
 * To run a query within a React component, call `usePaginatedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedPostsQuery({
 *   variables: {
 *      itemsPerPage: // value for 'itemsPerPage'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePaginatedPostsQuery(baseOptions: Apollo.QueryHookOptions<PaginatedPostsQuery, PaginatedPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginatedPostsQuery, PaginatedPostsQueryVariables>(PaginatedPostsDocument, options);
      }
export function usePaginatedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginatedPostsQuery, PaginatedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginatedPostsQuery, PaginatedPostsQueryVariables>(PaginatedPostsDocument, options);
        }
export function usePaginatedPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PaginatedPostsQuery, PaginatedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PaginatedPostsQuery, PaginatedPostsQueryVariables>(PaginatedPostsDocument, options);
        }
export type PaginatedPostsQueryHookResult = ReturnType<typeof usePaginatedPostsQuery>;
export type PaginatedPostsLazyQueryHookResult = ReturnType<typeof usePaginatedPostsLazyQuery>;
export type PaginatedPostsSuspenseQueryHookResult = ReturnType<typeof usePaginatedPostsSuspenseQuery>;
export type PaginatedPostsQueryResult = Apollo.QueryResult<PaginatedPostsQuery, PaginatedPostsQueryVariables>;