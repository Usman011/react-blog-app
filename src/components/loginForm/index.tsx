import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import InputField from 'components/common/InputField'
import { FIELDS, INPUT_TYPES, LABELS } from 'types/form.types'
import { LoginInput } from '__generated/graphql'
import { loginValidationSchema } from 'components/LoginForm/validationSchema'

const LoginForm = () => {
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
    reset(initialValues)
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box>
          <InputField name={FIELDS.EMAIL} label={LABELS.EMAIL} control={control} />
          <InputField
            name={FIELDS.PASSWORD}
            label={LABELS.PASSWORD}
            type={INPUT_TYPES.PASSWORD}
            control={control}
          />

          <Box mt={4}>
            <Button variant='contained' fullWidth type='submit' size='large'>
              Login
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default LoginForm

