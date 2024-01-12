import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import InputField from 'components/common/InputField'
import {
  ALERT_TYPE,
  BUTTON_TYPES,
  FIELDS,
  INPUT_TYPES,
  ISignupForm,
  LABELS
} from 'types/form.types'
import { signupValidationSchema } from './validationSchema'
import LoadingButton from 'components/common/LoadingButton'
import { useCreateUserMutation } from '__generated/graphql'
import { useSnackbar } from 'notistack'
import { alertMessage } from 'constants/alert.constants'

const SignupForm = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [mutation, { loading }] = useCreateUserMutation({
    onError: error =>
      enqueueSnackbar(error.message, {
        variant: ALERT_TYPE.ERROR
      }),
    onCompleted: () =>
      enqueueSnackbar(alertMessage.userCreated, {
        variant: ALERT_TYPE.SUCCESS
      })
  })

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
    const { confirmPassword: _, ...formData } = values
    mutation({ variables: { createUser: formData } })
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
            <LoadingButton fullWidth label='Signup' loading={loading} type={BUTTON_TYPES.SUBMIT} />
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default SignupForm
