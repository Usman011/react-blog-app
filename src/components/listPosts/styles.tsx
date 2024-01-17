import { Box } from '@mui/material'

import { MobileProps } from 'components/common/styles'
import styled from 'styled-components'

export const StyledImg = styled('img')<MobileProps>(({ isLaptop }) => ({
  width: isLaptop ? '350px' : '100%',
  height: '100%',
  maxHeight: '500px',
  minHeight: '250px',
  borderRadius: '5px'
}))

export const Card = styled(Box)<MobileProps>(({ isLaptop }) => ({
  padding: '1rem',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  width: '100%',
  height: isLaptop ? '100%' : '100%',
  marginTop: '2rem',
  display: 'flex',
  flexDirection: isLaptop ? 'row' : 'column',
  borderRadius: '5px'
}))

export const ContentBox = styled(Box)<MobileProps>(({ isLaptop }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: isLaptop ? '0rem 1rem' : '1rem 0rem',
  gap: '10px'
}))
