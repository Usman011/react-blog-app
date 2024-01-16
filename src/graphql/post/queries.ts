import { gql } from '@apollo/client'

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
