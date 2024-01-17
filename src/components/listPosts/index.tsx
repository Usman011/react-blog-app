import { useState } from 'react'

import { Box, Skeleton } from '@mui/material'

import { usePaginatedPostsQuery } from '__generated/graphql'
import PaginationButton from 'components/common/PaginationButton'
import Post from './Post'

const ListPosts = () => {
  const itemsPerPage = 5
  const [page, setPage] = useState(1)
  const { loading, data } = usePaginatedPostsQuery({
    variables: {
      itemsPerPage,
      page
    }
  })

  const handleChange = (page: number) => {
    setPage(page)
  }

  if (loading) {
    return (
      <Box mt={3}>
        <Skeleton variant='rounded' width='100%' height={420} />
      </Box>
    )
  }

  return (
    <Box pb={10}>
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
      <Box mt={4}>
        <PaginationButton currentPage={page} onChange={handleChange} isLoading={loading} />
      </Box>
    </Box>
  )
}

export default ListPosts
