import { Box, Skeleton } from '@mui/material'
import Post from './Post'
import { usePaginatedPostsQuery } from '__generated/graphql'
import { useState } from 'react'

const ListPosts = () => {
  const itemsPerPage = 10
  const [page, setPage] = useState(1)
  const { loading, data } = usePaginatedPostsQuery({
    variables: {
      itemsPerPage,
      page
    }
  })

  if (loading) {
    return (
      <Box mt={3}>
        <Skeleton variant='rounded' width='100%' height={420} />
      </Box>
    )
  }

  return (
    <Box>
      {data?.paginatedPosts.map(item => {
        return (
          <Post
            key={item.id}
            id={item.id}
            status={item.status}
            content={item.content}
            title={item.title}
            user={item.user}
          />
        )
      })}
    </Box>
  )
}

export default ListPosts
