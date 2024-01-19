import { Box } from '@mui/material'
import styled from 'styled-components'

interface StyledProps {
  isVertical: boolean
}

export const StyledImg = styled('img')<StyledProps>(({ isVertical }) => ({
  width: isVertical ? '350px' : '100%',
  height: 'auto',
  maxHeight: '500px',
  minHeight: '250px',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundSize: 'contain'
}))

export const Card = styled(Box)<StyledProps>(({ isVertical }) => ({
  padding: '1rem',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  width: '100%',
  height: isVertical ? '100%' : '100%',
  marginTop: '2rem',
  display: 'flex',
  flexDirection: isVertical ? 'row' : 'column',
  borderRadius: '5px'
}))

export const ContentBox = styled(Box)<StyledProps>(({ isVertical }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: isVertical ? '0rem 1rem' : '1rem 0rem',
  gap: '10px'
}))
