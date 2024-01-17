import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { TextField } from '@mui/material'
import { Control, Controller, FieldValues, Path, PathValue } from 'react-hook-form'
import {  INPUT_TYPES, INPUT_VARIANTS } from 'types/form.types'
import { useState } from 'react'

export type InputFieldProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>
  control: Control<TFieldValues>
  type?: string
  rows?: number
  disabled?: boolean
  label: string
  multiline?: boolean
}

const InputField = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  defaultValue,
  type = INPUT_TYPES.TEXT,
  rows,
  disabled,
  label,
  multiline
}: InputFieldProps<TFieldValues>) => {
  const [showPassword, setShowPassword] = useState(type === INPUT_TYPES.PASSWORD ? true : false)

  const handleClickShowPassword = () => {
    if (type === INPUT_TYPES.PASSWORD) {
      setShowPassword(show => !show)
    }
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          sx={{ marginTop: '1rem' }}
          {...field}
          type={type === INPUT_TYPES.PASSWORD && showPassword ? type : INPUT_TYPES.TEXT}
          variant={INPUT_VARIANTS.OUTLINED}
          name={name}
          label={label}
          disabled={disabled}
          rows={rows}
          multiline={multiline}
          defaultValue={defaultValue}
          fullWidth
          error={!!fieldState.error?.message || false}
          helperText={fieldState.error?.message || ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {type === INPUT_TYPES.PASSWORD ? showPassword ? <VisibilityOff /> : <Visibility /> : null}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      )}
    />
  )
}

export default InputField
