import Box from '@mui/material/Box'
import useAuthStore from 'stores/auth'

const Home = () => {
  const state = useAuthStore()
  console.log('state', state)
  return <Box>Home</Box>
}

export default Home
