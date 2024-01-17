import { FC } from 'react'

import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { CustomTag, Flex } from 'components/common/styles'
import { Card, ContentBox, StyledImg } from './styles'
import { useViewports } from 'helpers/viewports'
import { IPost } from 'types/component.types'

const Post: FC<IPost> = ({ content, title, user, status }) => {
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
          <Typography variant='h4' fontWeight='bold' mt={1}>
            {title}
          </Typography>
          <Typography variant='body1' mt={isLaptop ? 2 : 1}>
            {content}
          </Typography>
        </Box>

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
