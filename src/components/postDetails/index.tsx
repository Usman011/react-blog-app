import { Box, Skeleton, TextField, Typography } from '@mui/material'
import { useGetPostQuery } from '__generated/graphql'
import { useParams } from 'react-router'
import { StyledImg } from './styles'
import { useState } from 'react'
import FullScreenLoader from 'components/common/FullScreenLoader'
import PostComment from './PostComments'

const PostDetails = () => {
  const { id } = useParams()
  const postId = id ? parseInt(id) : -1
  const [imgLoading, setImgLoading] = useState(true)

  const handleImageLoad = () => {
    setImgLoading(false)
  }

  const { data, loading } = useGetPostQuery({
    variables: {
      getPostId: postId
    }
  })
  console.log('data', data)

  if (loading) {
    return (
      <Box sx={{ marginTop: '1rem' }}>
        <Skeleton variant='rounded' width='100%' height={420} />
      </Box>
    )
  }
  return (
    <Box pb={2}>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <Box>
          <Typography variant='h3' fontWeight='bold' py={4}>
            {data?.getPost.title}
          </Typography>
          <Box
            sx={{
              display: imgLoading ? 'block' : 'none'
            }}
          >
            <Skeleton variant='rounded' width='100%' height='500px' />
          </Box>
          <Box
            sx={{
              display: !imgLoading ? 'block' : 'none'
            }}
          >
            <StyledImg
              onLoad={handleImageLoad}
              src={'https://source.unsplash.com/random/800x800?sig=1'}
            />
          </Box>
          <Typography variant='subtitle1' py={1}>
            {data?.getPost.content}
          </Typography>

          <PostComment postId={postId} />
        </Box>
      )}
    </Box>
  )
}

export default PostDetails
