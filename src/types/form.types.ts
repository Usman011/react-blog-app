import { UserInput } from '__generated/graphql'

export interface ISignupForm extends UserInput {
  confirmPassword: string
}

export enum FIELDS {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  PASSWORD = 'password',
  EMAIL = 'email',
  CONFIRM_PASSWORD = 'confirmPassword'
}

export enum LABELS {
  FIRST_NAME = 'First Name',
  LAST_NAME = 'Last Name',
  PASSWORD = 'Password',
  EMAIL = 'Email',
  CONFIRM_PASSWORD = 'Confirm Password'
}

export enum INPUT_TYPES {
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  DATE = 'date',
  FILE = 'file',
  SELECT = 'select'
}
