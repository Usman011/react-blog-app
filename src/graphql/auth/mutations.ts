import { gql } from '@apollo/client'

export const createUserMutation = gql`
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
`

export const getUserMutation = gql`
  mutation getUser($loginData: LoginInput!) {
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
`

