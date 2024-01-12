import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Typography } from '@mui/material'
import { Control, Controller, FieldValues, Path, PathValue } from 'react-hook-form'
import { INPUT_TYPES } from 'types/form.types'

export type InputFieldProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>
  control: Control<TFieldValues>
  type?: string
  placeholder?: string
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
  placeholder,
  rows,
  disabled,
  label,
  multiline
}: InputFieldProps<TFieldValues>) => {
  const [showPassword, setShowPassword] = React.useState(type === 'password' ? false : true)

  const handleClickShowPassword = () => {
    if (type === 'password') {
      setShowPassword(show => !show)
    }
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <FormControl fullWidth sx={{ marginTop: '1rem' }} variant='outlined'>
      <InputLabel>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, name, ref }, fieldState }) => (
          <>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                type === 'password' ? (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {type === 'password' ? (
                        showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )
                      ) : null}
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <Box />
                )
              }
              name={name}
              label={label}
              disabled={disabled}
              onBlur={onBlur}
              onChange={onChange}
              inputRef={ref}
              placeholder={placeholder}
              rows={rows}
              multiline={multiline}
              defaultValue={defaultValue}
              value={value}
              error={!!fieldState.error?.message || false}
              fullWidth
            />
            <Typography variant='error'>{fieldState.error?.message || ''}</Typography>
          </>
        )}
      />
    </FormControl>
  )
}

export default InputField
