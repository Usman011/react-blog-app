import { PaletteOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string
  }
  interface SimplePaletteColorOptions {
    darker?: string
  }
  interface Palette {
    customText: string
    customBackground: string
  }
  interface PaletteOptions {
    customText: string
    customBackground: string
    hover: string
  }
}

export const lightModePalette: PaletteOptions = {
  primary: {
    main: '#002c59',
    light: '#e3f2fd',
    dark: '#00458c'
  },
  secondary: {
    main: '#64ffda',
    light: '#aea09b',
    dark: '#64fdff'
  },

  error: {
    main: '#d32f2f',
    light: '#e57373',
    dark: '#d32f2f'
  },
  warning: {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00'
  },
  info: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2'
  },
  success: {
    main: '#2e7d32',
    light: '#81c784',
    dark: '#388e3c'
  },
  customText: '#002c59',
  customBackground: '#fff',
  hover: '#64b5f6'
}

export const darkModePalette: PaletteOptions = {
  primary: {
    main: '#64ffda',
    light: '#e3f2fd',
    dark: '#42a5f5'
  },
  secondary: {
    main: '#ce93d8',
    light: '#f3e5f5',
    dark: '#ab47bc'
  },

  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f'
  },
  warning: {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00'
  },
  info: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2'
  },
  success: {
    main: '#4caf50',
    light: '#81c784',
    dark: '#388e3c'
  },
  customText: '#fff',
  customBackground: '#020c1b',
  hover: '#64ffda'
}
