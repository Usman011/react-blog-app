import { FC, useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { GetCommentQuery, useCreateCommentMutation, useGetCommentQuery } from '__generated/graphql'
import { Centered, Flex } from 'components/common/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CommentReply from './CommentReply'
import LoadingButton from 'components/common/LoadingButton'
import { IComment } from 'types/component.types'
import { INPUT_VARIANTS } from 'types/form.types'
import { ALERT } from 'components/notistack'

interface PostCommentProps {
  postId: number
}
const PostComment: FC<PostCommentProps> = ({ postId }) => {
  const itemsPerPage = 3
  const [comment, setComment] = useState('')
  const [page, setPage] = useState(1)
  const [allComments, setAllComments] = useState<IComment[]>([])

  const { data, loading } = useGetCommentQuery({
    variables: {
      itemsPerPage,
      page,
      postId
    },
    onCompleted: (response: GetCommentQuery) => {
      console.log('response', response)
      setAllComments(prev => [...response.getComment.comments, ...prev])
    }
  })

  const hasMore = allComments.length < (data?.getComment?.total || 0)

  console.log(allComments.length, data?.getComment.total)

  const [mutation, { loading: commentLoading }] = useCreateCommentMutation({
    onCompleted: response => {
      setComment('')
      setAllComments(prev => [{ ...response.createComment }, ...prev])
    }
  })

  const handleCommentClick = () => {
    mutation({
      variables: {
        data: {
          text: comment,
          postId
        }
      }
    })
  }

  return (
    <Box>
      <Flex gap={2} mt={2}>
        <TextField
          value={comment}
          variant={INPUT_VARIANTS.OUTLINED}
          fullWidth
          onChange={e => setComment(e.target.value)}
        />
        <LoadingButton
          disabled={comment === ''}
          loading={commentLoading}
          onClick={handleCommentClick}
          label='Comment'
        />
      </Flex>
      {allComments.length !== 0 ? (
        <Box>
          <Typography variant='subtitle1' fontWeight='bold' py={1}>
            {` Comments ( ${data?.getComment.total || 0} )`}
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography variant='subtitle1' fontWeight='bold' py={1}>
            No Comments yet
          </Typography>
        </Box>
      )}
      {allComments?.map(item => {
        return (
          <Box key={item.id}>
            <Flex alignItems='center' gap={1}>
              <AccountCircleIcon sx={{ color: '#999999', fontSize: '35px' }} />
              <Typography
                variant='body1'
                fontWeight='500'
              >{`${item.user?.firstName} ${item.user?.lastName}`}</Typography>
            </Flex>
            <Typography color='lightText' variant='body1' pb={1} pl={5}>
              {item.text}
            </Typography>

            <CommentReply
              // isEmpty={item.replies?.length === 0}
              postId={postId}
              commentId={item.id}
            />
          </Box>
        )
      })}
      <Centered py={3}>
        {!hasMore ? (
          <Typography variant='body2' color='lightText'>
            {allComments.length === 0 ? '' : 'No More comments'}
          </Typography>
        ) : (
          <LoadingButton
            loading={loading}
            label='Load More Comments'
            onClick={() => setPage(prev => prev + 1)}
          />
        )}
      </Centered>
    </Box>
  )
}

export default PostComment
