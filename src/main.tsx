import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { SnackbarProvider } from 'notistack'
import App from './App.tsx'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <App />
    </SnackbarProvider>
  </ApolloProvider>
)
