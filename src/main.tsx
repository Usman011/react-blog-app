import ReactDOM from 'react-dom/client'

import ApolloWrapper from 'components/apolloWrapper/index.tsx'
import App from './App.tsx'
import NotistackProvider from 'components/notistackProvider/index.tsx'
import { CustomSnackbar } from 'components/notistack/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NotistackProvider>
    <CustomSnackbar />
    <ApolloWrapper>
      <App />
    </ApolloWrapper>
  </NotistackProvider>
)
