import { CircularProgress } from '@mui/material'
import { Centered } from './styles'

const FullScreenLoader = () => {
  return (
    <Centered
      sx={{
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100vw'
      }}
    >
      <CircularProgress />
    </Centered>
  )
}

export default FullScreenLoader
