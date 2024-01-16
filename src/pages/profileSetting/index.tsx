import { Typography } from '@mui/material'
import { FormBox, WrapperCentered } from 'components/common/styles'
import PostForm from 'components/postForm'

const ProfileSetting = () => {
  return (
    <WrapperCentered>
      <FormBox>
        <Typography variant='h4' fontWeight='bold' mt={2}>
          Change your Post Now
        </Typography>
        <PostForm />
      </FormBox>
    </WrapperCentered>
  )
}

export default ProfileSetting
