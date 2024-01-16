import * as Yup from 'yup'

export const createPostValidationSchema = Yup.object({
  content: Yup.string().required('Content is required'),
  title: Yup.string().required('Title is required')
})
