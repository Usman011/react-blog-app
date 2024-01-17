import { Container, Divider, Typography } from '@mui/material'
import ListPosts from 'components/listPosts'

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Typography variant='h4' fontWeight='bold' py={4}>
        Recent Posts
      </Typography>
      <Divider />
      <ListPosts />
    </Container>
  )
}

export default Home
