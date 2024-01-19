import { useSnackbar, OptionsObject } from 'notistack'

type EnqueueSnackbarType = (message: string, options?: OptionsObject) => void
let snackbar: EnqueueSnackbarType

export const alert = (
  enqueueSnackbar: EnqueueSnackbarType,
  message: string,
  variant: OptionsObject['variant'] = 'default'
) => {
  if (!snackbar) {
    console.error('Snackbar not initialized. Call useSnackbarContext first.')
    return
  }
  enqueueSnackbar(message, { variant })
}

export const ALERT = {
  success: (message: string) => alert(snackbar, message, 'success'),
  error: (message: string) => alert(snackbar, message, 'error'),
  warning: (message: string) => alert(snackbar, message, 'warning'),
  info: (message: string) => alert(snackbar, message, 'info')
}

export const initializeSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar()
  snackbar = enqueueSnackbar
}

export const CustomSnackbar: React.FC = () => {
  initializeSnackbar()

  return <></>
}
