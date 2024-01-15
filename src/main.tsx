import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack'
import App from './App.tsx'
import ApolloWrapper from 'components/apolloWrapper/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
    <ApolloWrapper>
      <App />
    </ApolloWrapper>
  </SnackbarProvider>
)
