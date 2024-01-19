import { Typography } from '@mui/material'
import { Flex, FormBox, StyledLink, WrapperCentered } from 'components/common/styles'
import { ROUTES } from 'types/routes.types'
import SignupForm from 'components/signupForm'

const Signup = () => (
  <WrapperCentered>
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
  </WrapperCentered>
)

export default Signup
