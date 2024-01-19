import { FC } from 'react'
import Button from '@mui/material/Button'
import { Box, CircularProgress } from '@mui/material'
import { BUTTON_TYPES, INPUT_VARIANTS, COLORS, SIZES } from 'types/form.types'

interface LoadingButtonProps {
  label: string
  loading?: boolean
  onClick?: () => void
  type?: BUTTON_TYPES
  fullWidth?: boolean
  variant?: INPUT_VARIANTS
  size?: SIZES
  color?: COLORS
  disabled?: boolean
}

const LoadingButton: FC<LoadingButtonProps> = ({
  label,
  variant = INPUT_VARIANTS.CONTAINED,
  loading = false,
  type = BUTTON_TYPES.SUBMIT,
  onClick = () => {},
  fullWidth = false,
  size = SIZES.LARGE,
  color = COLORS.PRIMARY,
  disabled
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      size={size}
      startIcon={loading ? <CircularProgress size={20} color='inherit' /> : <Box />}
    >
      {loading ? '' : label}
    </Button>
  )
}

export default LoadingButton
