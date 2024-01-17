import { FC, useEffect } from 'react'
import { Outlet } from 'react-router'

import { Box } from '@mui/material'
import { useSnackbar } from 'notistack'
import Cookies from 'js-cookie'

import { ALERT_TYPE, COOKIES } from 'types/form.types'
import { useGetUserLazyQuery } from '__generated/graphql'
import { setUser } from 'stores/auth'
import FullScreenLoader from 'components/common/FullScreenLoader'
import Footer from 'components/common/Footer'
import Navbar from 'components/common/navbar'

const PublicLayout: FC = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [getUser, { loading }] = useGetUserLazyQuery({
    onError: error =>
      enqueueSnackbar(error.message, {
        variant: ALERT_TYPE.ERROR
      }),
    onCompleted: response => setUser(response.user)
  })

  useEffect(() => {
    if (Cookies.get(COOKIES.TOKEN)) {
      getUser({
        variables: {
          email: Cookies.get(COOKIES.EMAIL) || ''
        }
      })
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
      <Footer />
    </div>
  )
}

export default PublicLayout
