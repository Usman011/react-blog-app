import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import InputField from 'components/common/InputField'
import { FIELDS, INPUT_TYPES, ISignupForm, LABELS } from 'types/form.types'
import { signupValidationSchema } from './validationSchema'

const SignupForm = () => {
  const initialValues: ISignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(signupValidationSchema),
    defaultValues: initialValues
  })

  const onSubmitHandler = (values: ISignupForm) => {
    console.log(values)
    reset(initialValues)
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box>
          <InputField name={FIELDS.FIRST_NAME} label={LABELS.FIRST_NAME} control={control} />
          <InputField name={FIELDS.LAST_NAME} label={LABELS.LAST_NAME} control={control} />

          <InputField
            name={FIELDS.EMAIL}
            label={LABELS.EMAIL}
            type={INPUT_TYPES.EMAIL}
            control={control}
          />

          <InputField
            name={FIELDS.PASSWORD}
            label={LABELS.PASSWORD}
            type={INPUT_TYPES.PASSWORD}
            control={control}
          />

          <InputField
            name={FIELDS.CONFIRM_PASSWORD}
            label={LABELS.CONFIRM_PASSWORD}
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

export default SignupForm
