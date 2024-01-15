import React, { ReactNode } from 'react'
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
import { ALERT_TYPE, COOKIES, ERROR_TYPE } from 'types/form.types.ts'
import { useSnackbar } from 'notistack'
import { logoutUser } from 'stores/auth'

interface ApolloWrapperProps {
  children: ReactNode
}
const ApolloWrapper: React.FC<ApolloWrapperProps> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar()
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

  const errors = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      console.log('graphQLErrors', graphQLErrors)
      graphQLErrors.map(error => {
        enqueueSnackbar(`Graphql Error: ${error. message}`, {
          variant: ALERT_TYPE.ERROR
        })
        if (error.extensions?.code === 500) {
          Cookies.remove(COOKIES.EMAIL)
          Cookies.remove(COOKIES.TOKEN)
          logoutUser()
        }
     
      })
    }

    if (networkError?.message === ERROR_TYPE.UNAUTHORIZED) {
      Cookies.remove(COOKIES.EMAIL)
      Cookies.remove(COOKIES.TOKEN)
      logoutUser()
    }
  })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errors, authMiddleware, httpLink])
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
