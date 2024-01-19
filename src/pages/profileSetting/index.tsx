import { Typography } from '@mui/material'
import ChangePasswordTab from 'components/changePasswordTab'
import { FormBox, WrapperCentered } from 'components/common/styles'

const ProfileSetting = () => (
  <WrapperCentered>
    <FormBox>
      <Typography variant='h4' fontWeight='bold' mt={2}>
        Change Password
      </Typography>
      <ChangePasswordTab />
    </FormBox>
  </WrapperCentered>
)

export default ProfileSetting
