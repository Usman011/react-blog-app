import { FC, useEffect, useState } from 'react'
import { Box, CircularProgress, TextField, Typography } from '@mui/material'
import {
  useAddReplyToCommentMutation,
  useGetRepliesOfCommentLazyQuery,
  useGetRepliesOfCommentQuery
} from '__generated/graphql'
import { Flex } from 'components/common/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { INPUT_VARIANTS } from 'types/form.types'
import LoadingButton from 'components/common/LoadingButton'
import { ALERT } from 'components/notistack'
import { StyledText } from './styles'
import { IComment } from 'types/component.types'

interface CommentReplyProps {
  commentId: number
  postId: number
}
const CommentReply: FC<CommentReplyProps> = ({ commentId, postId }) => {
  const itemsPerPage = 3
  const [showReply, setShowReply] = useState(false)
  const [showReplyButton, setShowReplyButton] = useState(false)
  const [allComments, setAllComments] = useState<IComment[]>([])

  const [page, setPage] = useState(1)
  const [comment, setComment] = useState('')

  const [mutation, { loading: commentLoading }] = useAddReplyToCommentMutation({
    onCompleted: response => {
      setComment('')
      setAllComments(prev => [{ ...response.addReplyToComment }, ...prev])
    }
  })
  const { data, loading } = useGetRepliesOfCommentQuery({
    variables: {
      itemsPerPage,
      page,
      commentId
    },
    onCompleted: response => {
      setComment('')
      setAllComments(prev => [...response.getRepliesOfComment.comments, ...prev])
    }
  })
  const hasMore = allComments.length < (data?.getRepliesOfComment?.total || 0)

  const handleCommentClick = () => {
    setShowReply(true)
    mutation({
      variables: {
        data: {
          text: comment,
          commentId,
          postId
        }
      }
    })
  }

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
  }

  return (
    <Box pl={5}>
      {showReply && (
        <Box>
          {loading && <CircularProgress />}
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
              </Box>
            )
          })}
          {!hasMore ? (
            <Typography variant='body2' color='lightText'>
              {allComments.length === 0 ? '' : 'No More comments'}
            </Typography>
          ) : (
            <LoadingButton
              loading={loading}
              variant={INPUT_VARIANTS.TEXT}
              label='Load More Replies'
              onClick={handleLoadMoreClick}
            />
          )}
        </Box>
      )}

      {showReplyButton && (
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
            label='Reply'
          />
        </Flex>
      )}
      <Flex gap={2}>
        <StyledText onClick={() => setShowReplyButton(prev => !prev)}>
          {!showReplyButton ? 'Reply' : 'Close'}
        </StyledText>
        {data?.getRepliesOfComment.total ? (
          <StyledText
            onClick={() => {
              setShowReply(prev => !prev)
            }}
          >
            {!showReply ? `Show Replies ( ${data?.getRepliesOfComment.total} )` : 'Close Replies'}
          </StyledText>
        ) : (
          <Box />
        )}
      </Flex>
    </Box>
  )
}

export default CommentReply
