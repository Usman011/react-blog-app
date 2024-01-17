import { CircularProgress } from '@mui/material'
import { Centered, fullScreenSpinner } from './styles'

const FullScreenLoader = () => (
  <Centered sx={fullScreenSpinner}>
    <CircularProgress />
  </Centered>
)

export default FullScreenLoader
