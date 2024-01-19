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

export type CommentsResponse = {
  __typename?: 'CommentsResponse';
  comments: Array<Comment>;
  total: Scalars['Int']['output'];
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

export type PaginatedPostsResponse = {
  __typename?: 'PaginatedPostsResponse';
  posts: Array<Post>;
  total: Scalars['Int']['output'];
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
  getComment: CommentsResponse;
  getPost: Post;
  getRepliesOfComment: CommentsResponse;
  hello: Scalars['String']['output'];
  listComments: Array<Comment>;
  listPosts: Array<Post>;
  paginatedPosts: PaginatedPostsResponse;
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

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } };

export type CreateUserMutationVariables = Exact<{
  createUser: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', register: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } } };

export type LoginMutationVariables = Exact<{
  loginData: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } } };

export type CreatePostMutationVariables = Exact<{
  data: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'SuccessResponse', message?: string | null, id?: number | null, success?: boolean | null } };

export type GetPostQueryVariables = Exact<{
  getPostId: Scalars['Int']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost: { __typename?: 'Post', content: string, id: number, status: PostStatus, title: string, user?: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } | null, comments?: Array<{ __typename?: 'Comment', text?: string | null, id: number, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string }, replies?: Array<{ __typename?: 'Comment', text?: string | null, id: number, user: { __typename?: 'User', email: string, firstName: string, lastName: string, id: number } }> | null }> | null } };

export type CreateCommentMutationVariables = Exact<{
  data: CommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: number, text?: string | null, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string }, replies?: Array<{ __typename?: 'Comment', text?: string | null, id: number, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } }> | null } };

export type GetCommentQueryVariables = Exact<{
  postId: Scalars['Int']['input'];
  itemsPerPage: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;


export type GetCommentQuery = { __typename?: 'Query', getComment: { __typename?: 'CommentsResponse', total: number, comments: Array<{ __typename?: 'Comment', text?: string | null, id: number, user: { __typename?: 'User', email: string, firstName: string, lastName: string, id: number }, replies?: Array<{ __typename?: 'Comment', id: number, text?: string | null, user: { __typename?: 'User', email: string, firstName: string, lastName: string, id: number } }> | null }> } };

export type GetRepliesOfCommentQueryVariables = Exact<{
  itemsPerPage: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  commentId: Scalars['Int']['input'];
}>;


export type GetRepliesOfCommentQuery = { __typename?: 'Query', getRepliesOfComment: { __typename?: 'CommentsResponse', total: number, comments: Array<{ __typename?: 'Comment', id: number, text?: string | null, user: { __typename?: 'User', email: string, firstName: string, lastName: string, id: number }, replies?: Array<{ __typename?: 'Comment', text?: string | null, id: number, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } }> | null }> } };

export type AddReplyToCommentMutationVariables = Exact<{
  data: ReplyInput;
}>;


export type AddReplyToCommentMutation = { __typename?: 'Mutation', addReplyToComment: { __typename?: 'Comment', id: number, text?: string | null, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string }, replies?: Array<{ __typename?: 'Comment', text?: string | null, id: number, user: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } }> | null } };

export type PaginatedPostsQueryVariables = Exact<{
  itemsPerPage: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;


export type PaginatedPostsQuery = { __typename?: 'Query', paginatedPosts: { __typename?: 'PaginatedPostsResponse', total: number, posts: Array<{ __typename?: 'Post', content: string, id: number, status: PostStatus, title: string, user?: { __typename?: 'User', email: string, firstName: string, id: number, lastName: string } | null }> } };


export const GetUserDocument = gql`
    query getUser {
  user {
    email
    firstName
    id
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
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
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
export const CreatePostDocument = gql`
    mutation CreatePost($data: postInput!) {
  createPost(data: $data) {
    message
    id
    success
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const GetPostDocument = gql`
    query GetPost($getPostId: Int!) {
  getPost(id: $getPostId) {
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
    comments {
      text
      id
      user {
        email
        firstName
        id
        lastName
      }
      replies {
        text
        id
        user {
          email
          firstName
          lastName
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      getPostId: // value for 'getPostId'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export function useGetPostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<typeof useGetPostSuspenseQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($data: CommentInput!) {
  createComment(data: $data) {
    id
    text
    user {
      email
      firstName
      id
      lastName
    }
    replies {
      text
      id
      user {
        email
        firstName
        id
        lastName
      }
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const GetCommentDocument = gql`
    query GetComment($postId: Int!, $itemsPerPage: Int!, $page: Int!) {
  getComment(postId: $postId, itemsPerPage: $itemsPerPage, page: $page) {
    total
    comments {
      text
      user {
        email
        firstName
        lastName
        id
      }
      id
      replies {
        id
        text
        user {
          email
          firstName
          lastName
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetCommentQuery__
 *
 * To run a query within a React component, call `useGetCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      itemsPerPage: // value for 'itemsPerPage'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetCommentQuery(baseOptions: Apollo.QueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, options);
      }
export function useGetCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, options);
        }
export function useGetCommentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, options);
        }
export type GetCommentQueryHookResult = ReturnType<typeof useGetCommentQuery>;
export type GetCommentLazyQueryHookResult = ReturnType<typeof useGetCommentLazyQuery>;
export type GetCommentSuspenseQueryHookResult = ReturnType<typeof useGetCommentSuspenseQuery>;
export type GetCommentQueryResult = Apollo.QueryResult<GetCommentQuery, GetCommentQueryVariables>;
export const GetRepliesOfCommentDocument = gql`
    query GetRepliesOfComment($itemsPerPage: Int!, $page: Int!, $commentId: Int!) {
  getRepliesOfComment(itemsPerPage: $itemsPerPage, page: $page, commentId: $commentId) {
    total
    comments {
      id
      text
      user {
        email
        firstName
        lastName
        id
      }
      replies {
        user {
          email
          firstName
          id
          lastName
        }
        text
        id
      }
    }
  }
}
    `;

/**
 * __useGetRepliesOfCommentQuery__
 *
 * To run a query within a React component, call `useGetRepliesOfCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRepliesOfCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRepliesOfCommentQuery({
 *   variables: {
 *      itemsPerPage: // value for 'itemsPerPage'
 *      page: // value for 'page'
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useGetRepliesOfCommentQuery(baseOptions: Apollo.QueryHookOptions<GetRepliesOfCommentQuery, GetRepliesOfCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRepliesOfCommentQuery, GetRepliesOfCommentQueryVariables>(GetRepliesOfCommentDocument, options);
      }
export function useGetRepliesOfCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRepliesOfCommentQuery, GetRepliesOfCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRepliesOfCommentQuery, GetRepliesOfCommentQueryVariables>(GetRepliesOfCommentDocument, options);
        }
export function useGetRepliesOfCommentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRepliesOfCommentQuery, GetRepliesOfCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRepliesOfCommentQuery, GetRepliesOfCommentQueryVariables>(GetRepliesOfCommentDocument, options);
        }
export type GetRepliesOfCommentQueryHookResult = ReturnType<typeof useGetRepliesOfCommentQuery>;
export type GetRepliesOfCommentLazyQueryHookResult = ReturnType<typeof useGetRepliesOfCommentLazyQuery>;
export type GetRepliesOfCommentSuspenseQueryHookResult = ReturnType<typeof useGetRepliesOfCommentSuspenseQuery>;
export type GetRepliesOfCommentQueryResult = Apollo.QueryResult<GetRepliesOfCommentQuery, GetRepliesOfCommentQueryVariables>;
export const AddReplyToCommentDocument = gql`
    mutation AddReplyToComment($data: ReplyInput!) {
  addReplyToComment(data: $data) {
    id
    text
    user {
      email
      firstName
      id
      lastName
    }
    replies {
      text
      id
      user {
        email
        firstName
        id
        lastName
      }
    }
  }
}
    `;
export type AddReplyToCommentMutationFn = Apollo.MutationFunction<AddReplyToCommentMutation, AddReplyToCommentMutationVariables>;

/**
 * __useAddReplyToCommentMutation__
 *
 * To run a mutation, you first call `useAddReplyToCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReplyToCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReplyToCommentMutation, { data, loading, error }] = useAddReplyToCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddReplyToCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddReplyToCommentMutation, AddReplyToCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReplyToCommentMutation, AddReplyToCommentMutationVariables>(AddReplyToCommentDocument, options);
      }
export type AddReplyToCommentMutationHookResult = ReturnType<typeof useAddReplyToCommentMutation>;
export type AddReplyToCommentMutationResult = Apollo.MutationResult<AddReplyToCommentMutation>;
export type AddReplyToCommentMutationOptions = Apollo.BaseMutationOptions<AddReplyToCommentMutation, AddReplyToCommentMutationVariables>;
export const PaginatedPostsDocument = gql`
    query PaginatedPosts($itemsPerPage: Int!, $page: Int!) {
  paginatedPosts(itemsPerPage: $itemsPerPage, page: $page) {
    total
    posts {
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