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

export const PaginatedPosts = gql`
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
`
