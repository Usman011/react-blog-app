import { FC, useEffect } from 'react'
import { Outlet } from 'react-router'

import { Box } from '@mui/material'
import Cookies from 'js-cookie'

import { COOKIES } from 'types/form.types'
import { useGetUserLazyQuery } from '__generated/graphql'
import { setUser } from 'stores/auth'
import FullScreenLoader from 'components/common/FullScreenLoader'
import Navbar from 'components/common/navbar'
import { ALERT } from 'components/notistack'

const PublicLayout: FC = () => {
  const [getUser, { loading }] = useGetUserLazyQuery({
    onError: error => ALERT.error(error.message),
    onCompleted: response => setUser(response.user)
  })

  useEffect(() => {
    if (Cookies.get(COOKIES.TOKEN)) {
      getUser()
    }
  }, [])

  if (loading) {
    return <FullScreenLoader />
  }

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          height: 'calc(100vh - 175px)'
        }}
      >
        <Outlet />
      </Box>
    </div>
  )
}

export default PublicLayout
