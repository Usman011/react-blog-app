import { gql } from '@apollo/client';

export const userQuery = gql`
 mutation CreateUser($createUser: UserInput!) {
  register(createUser: $createUser) {
    token
    user {
      email
      firstName
      id
      lastName
      password
    }
  }
}
`;