import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useViewports } from 'helpers/viewports'
import { CustomTag, Flex } from 'components/common/styles'
import { IPost } from 'types/component.types'
import { Card, ContentBox, StyledImg } from './styles'

const Post: React.FC<IPost> = ({ content, title, user, status }) => {
  const { isLaptop } = useViewports()

  return (
    <Card isLaptop={isLaptop}>
      <StyledImg
        src={`https://source.unsplash.com/random/200x200?sig=${
          Math.floor(Math.random() * 100) + 1
        }`}
        isLaptop={isLaptop}
      />
      <ContentBox isLaptop={isLaptop}>
        <Box>
          <CustomTag>
            <Typography variant='body2' textAlign='center'>
              Travel
            </Typography>
          </CustomTag>
          <Typography variant='h4' fontWeight='bold' mt={4}>
            {title}
          </Typography>
        </Box>

        <Typography variant='body1'>{content}</Typography>
        <Flex alignItems='center' gap={2}>
          <AccountCircleIcon sx={{ color: '#999999', fontSize: '35px' }} />
          <Typography
            variant='body1'
            color='lightText'
          >{`${user?.firstName} ${user?.lastName}`}</Typography>
          <CustomTag>
            <Typography variant='body2' textAlign='center'>
              {status}
            </Typography>
          </CustomTag>
        </Flex>
      </ContentBox>
    </Card>
  )
}

export default Post
