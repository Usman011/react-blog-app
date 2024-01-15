import { useNavigate } from 'react-router'

import { Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'

import InputField from 'components/common/InputField'
import LoadingButton from 'components/common/LoadingButton'
import { LoginInput, useLoginMutation } from '__generated/graphql'
import { loginValidationSchema } from './validationSchema'
import { ALERT_TYPE, BUTTON_TYPES, FIELDS, INPUT_TYPES, LABELS } from 'types/form.types'

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [mutation, { loading }] = useLoginMutation({
    onError: error =>
      enqueueSnackbar(error.message, {
        variant: ALERT_TYPE.ERROR
      }),
    onCompleted: () => {
      navigate('/')
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
