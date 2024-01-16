import { gql } from '@apollo/client'

export const CreatePost = gql`
  mutation CreatePost($data: postInput!) {
    createPost(data: $data) {
      message
      id
      success
    }
  }
`
