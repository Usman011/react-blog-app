import * as Yup from 'yup'

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Email must be valid').required('Email must required.'),
  password: Yup.string().required('Password is required')
})
