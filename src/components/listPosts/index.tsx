import { useState } from 'react'

import { Box, Skeleton, Typography } from '@mui/material'

import { usePaginatedPostsQuery } from '__generated/graphql'
import PaginationButton from 'components/common/PaginationButton'
import Post from './Post'

const ListPosts = () => {
  const itemsPerPage = 5
  const [page, setPage] = useState(1)
  const { loading, data, error } = usePaginatedPostsQuery({
    variables: {
      itemsPerPage,
      page
    }
  })
  const totalPosts = data?.paginatedPosts?.total || 0
  const hasMore = page * itemsPerPage > totalPosts ? false : true

  console.log('hasMore', hasMore)

  console.log('error', error)

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
      {data?.paginatedPosts.posts.map(item => {
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
      {totalPosts === 0 ? (
        <Typography variant='h6' textAlign='center' fontWeight={500} mt={4}>
          No Post Available yet
        </Typography>
      ) : (
        <Box mt={4}>
          <PaginationButton
            hasMore={hasMore}
            currentPage={page}
            onChange={handleChange}
            isLoading={loading}
          />
        </Box>
      )}
    </Box>
  )
}

export default ListPosts
