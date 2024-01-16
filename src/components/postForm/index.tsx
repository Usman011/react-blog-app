import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import InputField from 'components/common/InputField'
import { ALERT_TYPE, BUTTON_TYPES, FIELDS, IPostForm, LABELS } from 'types/form.types'
import { createPostValidationSchema } from './validationSchema'
import LoadingButton from 'components/common/LoadingButton'
import { useCreatePostMutation } from '__generated/graphql'
import { useSnackbar } from 'notistack'
import { alertMessage } from 'constants/alert.constants'

const PostForm = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [mutation, { loading }] = useCreatePostMutation({
    onCompleted: () => {
      enqueueSnackbar(alertMessage.postCreated, {
        variant: ALERT_TYPE.SUCCESS
      })
    }
  })

  const initialValues: IPostForm = {
    content: '',
    title: ''
  }
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(createPostValidationSchema),
    defaultValues: initialValues
  })

  const onSubmitHandler = (values: IPostForm) => {
    console.log(values)
    mutation({ variables: { data: values } })
    reset(initialValues)
  }

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box>
          <InputField name={FIELDS.TITLE} label={LABELS.TITLE} control={control} />
          <InputField rows={5} multiline name={FIELDS.CONTENT} label={LABELS.CONTENT} control={control} />

          <Box mt={4}>
            <LoadingButton fullWidth label='Create Post' loading={loading} type={BUTTON_TYPES.SUBMIT} />
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default PostForm
