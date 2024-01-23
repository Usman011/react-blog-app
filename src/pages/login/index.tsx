import { Typography } from '@mui/material'
import LoginForm from 'components/loginForm'
import { ROUTES } from 'types/routes.types'
import { Flex, FormBox, StyledLink, WrapperCentered } from 'components/common/styles'

const Login = () => (
  <WrapperCentered>
    <FormBox>
      <Typography variant='h4' fontWeight='bold' mt={2}>
        Welcome Back
      </Typography>
      <Flex alignItems='center' mt={2}>
        <Typography variant='body2' color='lightText'>
          Don't have account?
        </Typography>
        <StyledLink to={ROUTES.SIGNUP}>Signup</StyledLink>
      </Flex>
      <LoginForm />
    </FormBox>
  </WrapperCentered>
)

export default Login
