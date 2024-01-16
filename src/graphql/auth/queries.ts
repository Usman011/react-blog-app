import { gql } from '@apollo/client'

export const getUserMutation = gql`
  query getUser($email: String!) {
    user(email: $email) {
      email
      id
      firstName
      lastName
    }
  }
`