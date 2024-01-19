import { Box } from '@mui/material'
import { SnackbarKey, SnackbarProvider, closeSnackbar } from 'notistack'
import { ReactNode, FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'

interface NotistackProviderProps {
  children: ReactNode
}

const closeButton = (snackbarId: SnackbarKey) => (
  <Box>
    <CloseIcon
      sx={{
        fontSize: '30px',
        color: '#fff',
        cursor: 'pointer'
      }}
      onClick={() => {
        closeSnackbar(snackbarId)
      }}
    />
  </Box>
)

const NotistackProvider: FC<NotistackProviderProps> = ({ children }) => (
    <SnackbarProvider
      autoHideDuration={5000}
      maxSnack={3}
      action={snackbarId => closeButton(snackbarId)}
    >
      {children}
    </SnackbarProvider>
  )

export default NotistackProvider
