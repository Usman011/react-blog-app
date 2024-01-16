import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import InputField from 'components/common/InputField'
import { ALERT_TYPE, BUTTON_TYPES, FIELDS, LABELS } from 'types/form.types'
import { changePasswordValidationSchema } from './validationSchema'
import LoadingButton from 'components/common/LoadingButton'
import { useCreatePostMutation } from '__generated/graphql'
import { useSnackbar } from 'notistack'
import { alertMessage } from 'constants/alert.constants'

interface IChangePasswordTab {
  prevPassword: string
  password: string
  confirmPassword: string
}
const ChangePasswordTab = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [mutation, { loading }] = useCreatePostMutation({
    onCompleted: () => {
      enqueueSnackbar(alertMessage.postCreated, {
        variant: ALERT_TYPE.SUCCESS
      })
    }
  })

  const initialValues: IChangePasswordTab = {
    prevPassword: '',
    password: '',
    confirmPassword: ''
  }
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(changePasswordValidationSchema),
    defaultValues: initialValues
  })

  const onSubmitHandler = (values: IChangePasswordTab) => {
    console.log(values)
    reset(initialValues)
  }

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box>
          <InputField name={FIELDS.PREV_PASSWORD} label={LABELS.PREV_PASSWORD} control={control} />
          <InputField name={FIELDS.NEW_PASSWORD} label={LABELS.NEW_PASSWORD} control={control} />
          <InputField
            name={FIELDS.CONFIRM_PASSWORD}
            label={LABELS.CONFIRM_PASSWORD}
            control={control}
          />

          <Box mt={4}>
            <LoadingButton
              fullWidth
              label='Create Post'
              loading={loading}
              type={BUTTON_TYPES.SUBMIT}
            />
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default ChangePasswordTab
