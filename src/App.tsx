import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { CustomTheme, ThemeVariantsProps } from 'theme'
import { router } from 'constants'

function App() {
  const activeTheme = useMemo(() => CustomTheme(ThemeVariantsProps.light), [])

  return (
    <ThemeProvider theme={activeTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
