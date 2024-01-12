import ReactDOM from 'react-dom/client'

import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  from,
  ApolloProvider
} from '@apollo/client'
// import { onError } from '@apollo/client/link/error'
import { SnackbarProvider } from 'notistack'
import Cookies from 'js-cookie'

import App from './App.tsx'
import { COOKIES } from 'types/form.types.ts'

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

// const errors = onError(({ networkError, graphQLErrors }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message }) => {})
//   }
//   if (networkError?.statusCode === 401) logout()
// })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink])
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </SnackbarProvider>
)
