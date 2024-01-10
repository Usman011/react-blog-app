import { Link } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
import SignupForm from 'components/SignupForm'
import { Flex } from 'components/common/Design'
import { ROUTES } from 'types/routes.types'

const Login = () => {
  return (
    <Wrapper maxWidth='lg'>
      <FormBox>
        <Typography variant='h4' fontWeight='bold' mt={2}>
          Create An Account
        </Typography>
        <Flex alignItems='center' mt={2}>
          <Typography variant='body2' color='lightText'>
            Already have account?
          </Typography>
          <StyledLink to={ROUTES.LOGIN}>Login</StyledLink>
        </Flex>
        <SignupForm />
      </FormBox>
    </Wrapper>
  )
}

export default Login

const FormBox = styled(Box)(() => ({
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

const Wrapper = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh'
}))

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: '.9rem',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  marginLeft: '.5rem'
}))
