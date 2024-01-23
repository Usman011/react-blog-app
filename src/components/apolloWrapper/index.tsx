import React from 'react'
import Cookies from 'js-cookie'
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  from,
  ApolloProvider
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { COOKIES } from 'types/form.types.ts'
import { logoutUser } from 'stores/auth'
import { ApolloWrapperProps } from 'types/component.types'
import { ALERT } from 'components/notistack'

const httpLink = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_URL })

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: Cookies.get(COOKIES.TOKEN) || null
    }
  }))
  return forward(operation)
})

const errors = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(error => {
      ALERT.error(`Error: ${error.message}`)
      if (error.extensions?.code === 500) {
        logoutUser()
      }
    })
  }
})
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errors, authMiddleware, httpLink])
})
const ApolloWrapper: React.FC<ApolloWrapperProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
