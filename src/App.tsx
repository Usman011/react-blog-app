import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { CustomTheme, ThemeVariantsProps } from 'theme'
import { router } from './constants'

function App() {
  const activeTheme = useMemo(() => CustomTheme(ThemeVariantsProps.light), [])

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
