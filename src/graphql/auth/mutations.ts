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

export const loginUserMutation = gql`
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
`


