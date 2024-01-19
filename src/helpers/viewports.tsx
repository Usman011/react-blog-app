import { useTheme, useMediaQuery } from '@mui/material'

interface Viewports {
  isMobile: boolean
  isLaptop: boolean
  isDesktop: boolean
  isTablet: boolean
}

export function useViewports(): Viewports {
  const theme = useTheme()

  // TODO: RnD required
  // Phase 1 RnD Completed

  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'))
  const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'xl'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop
  }
}
