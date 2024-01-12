import Button from '@mui/material/Button'
import { CircularProgress } from '@mui/material'
import { BUTTON_TYPES, INPUT_VARIANTS, COLORS, SIZES } from 'types/form.types'

interface LoadingButtonProps {
  label: string
  loading?: boolean
  onClick?: () => void
  type?: BUTTON_TYPES
  fullWidth?: boolean
  loadingText?: string
  variant?: INPUT_VARIANTS
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  label,
  variant = INPUT_VARIANTS.CONTAINED,
  loading = false,
  type = BUTTON_TYPES.BUTTON,
  onClick,
  fullWidth,
  loadingText
}) => {
  const handleClick = () => {
    if (!loading && onClick) {
      onClick()
    }
  }

  return (
    <Button
      variant={variant}
      type={type}
      color={COLORS.PRIMARY}
      fullWidth={fullWidth}
      disabled={loading || false}
      onClick={handleClick}
      size={SIZES.LARGE}
      startIcon={loading && <CircularProgress size={20} color='inherit' />}
    >
      {loading ? loadingText || 'Loading...' : label}
    </Button>
  )
}

export default LoadingButton
