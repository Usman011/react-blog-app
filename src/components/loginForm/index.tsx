import { useNavigate } from 'react-router'

import Cookies from 'js-cookie'
import { Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import InputField from 'components/common/InputField'
import LoadingButton from 'components/common/LoadingButton'
import { LoginInput, useLoginMutation } from '__generated/graphql'
import { loginValidationSchema } from './validationSchema'
import { BUTTON_TYPES, COOKIES, FIELDS, INPUT_TYPES, LABELS } from 'types/form.types'
import { ROUTES } from 'types/routes.types'

const LoginForm = () => {
  const navigate = useNavigate()
  const [mutation, { loading }] = useLoginMutation({
    onCompleted: res => {
      Cookies.set(COOKIES.TOKEN, res.login.token, { expires: 1 })
      Cookies.set(COOKIES.EMAIL, res.login.user.email, { expires: 1 })
      navigate(ROUTES.HOME)
    }
  })
  const initialValues: LoginInput = {
    email: '',
    password: ''
  }
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: initialValues
  })

  const onSubmitHandler = (values: LoginInput) => {
    console.log(values)
    mutation({ variables: { loginData: values } })
    reset(initialValues)
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box>
          <InputField
            name={FIELDS.EMAIL}
            label={LABELS.EMAIL}
            control={control}
            type={INPUT_TYPES.TEXT}
          />
          <InputField
            name={FIELDS.PASSWORD}
            label={LABELS.PASSWORD}
            type={INPUT_TYPES.PASSWORD}
            control={control}
          />

          <Box mt={4}>
            <LoadingButton label='Login' fullWidth type={BUTTON_TYPES.SUBMIT} loading={loading} />
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default LoginForm
