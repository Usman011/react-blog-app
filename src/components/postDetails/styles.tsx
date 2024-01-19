import { Box } from '@mui/material'
import styled from 'styled-components'

export const StyledImg = styled('img')(() => ({
  width: '100%',
  backgroundSize: 'cover',
  height: '500px',
  minHeight: '250px',
  borderRadius: '5px',
  cursor: 'pointer'
}))

export const StyledText = styled(Box)(() => ({
  color: 'blue',
  padding: '1rem'
}))
