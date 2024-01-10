export interface ILoginForm {
  email: string
  password: string
}

export interface ISignupForm {
  email: string
  password: string
  name: string
  confirmPassword: string
}

export enum FIELDS {
  NAME = 'name',
  PASSWORD = 'password',
  EMAIL = 'email',
  CONFIRM_PASSWORD = 'confirmPassword'
}

export enum LABELS {
  NAME = 'Name',
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
  SELECT = 'select',
}
