import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { darkModePalette, lightModePalette } from './palette'
import { typography } from './typography'
import { breakpoints } from './breakpoints'
import { transitions } from './transitions'

export enum ThemeVariantsProps {
  light = 'light',
  dark = 'dark'
}

export const CustomTheme = (mode: ThemeVariantsProps) => {
  const theme = createTheme({
    palette: {
      ...(mode === ThemeVariantsProps.light ? lightModePalette : darkModePalette)
    },
    typography,
    breakpoints,
    transitions
  })
  return responsiveFontSizes(theme)
}
