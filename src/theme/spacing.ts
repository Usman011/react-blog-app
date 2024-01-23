declare module '@mui/material/styles' {
  interface Theme {
    spacing: (s: SpacerIndex) => number
  }
  interface ThemeOptions {
    spacing: (s: SpacerIndex) => number
  }
}

export type SpacerIndex = keyof typeof spaces

const spaces = {
  0: 0,
  1: 8,
  2: 16,
  3: 24,
  4: 32,
  5: 40,
  6: 48,
  7: 56
}

export const spacing = (index: SpacerIndex) => {
  const scalingFactor = 1.5
  return spaces[index] * scalingFactor
}
