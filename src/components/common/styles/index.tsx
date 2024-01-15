import { Box, BoxProps } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export interface MobileProps {
  isLaptop: boolean
}

export const FormBox = styled(Box)(() => ({
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  padding: '1.5rem',
  borderRadius: '5px',
  maxWidth: '450px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

export const WrapperCentered = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  height: '100vh',
  width: '100vw'
}))

export const StyledLink = styled(Link)(() => ({
  fontSize: '.9rem',
  textDecoration: 'none',
  color: '#002c59',
  marginLeft: '.5rem'
}))

export const LightStyledLink = styled(Link)(() => ({
  fontSize: '.9rem',
  textDecoration: 'none',
  color: '#fff',
  marginLeft: '.5rem'
}))

export const CustomTag = styled(Box)(() => ({
  background: '#F2F8F7',
  padding: '.5rem 1rem',
  color: '#666666',
  fontSize: '1rem',
  borderRadius: '5px',
  display: 'inline-block'
}))


export const Flex: React.FC<BoxProps> = props => <Box display='flex' {...props} />

export const Centered: React.FC<BoxProps> = props => (
  <Flex justifyContent='center' alignItems='center' {...props} />
)
