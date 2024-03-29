import { Typography } from '@mui/material'
import styled from 'styled-components'

export const StyledImg = styled('img')(() => ({
  width: '100%',
  backgroundSize: 'cover',
  height: '500px',
  minHeight: '250px',
  borderRadius: '5px',
  cursor: 'pointer'
}))

export const StyledText = styled(Typography)(() => ({
  color: 'blue',
  padding: '.5rem',
  cursor: 'pointer'
}))
