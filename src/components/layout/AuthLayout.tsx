import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import { useSnackbar } from 'notistack'
import Cookies from 'js-cookie'

import Footer from 'components/common/Footer'
import useAuthStore, { AuthState, setUser } from 'stores/auth'
import { ALERT_TYPE, COOKIES, ERROR_TYPE } from 'types/form.types'
import { ROUTES } from 'types/routes.types'
import { useGetUserLazyQuery } from '__generated/graphql'
import { Box } from '@mui/material'
import Navbar from 'components/common/navbar'
import FullScreenLoader from 'components/common/FullScreenLoader'

const AuthLayout: React.FC = () => {
  const auth: AuthState = useAuthStore()
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [getUser, { loading }] = useGetUserLazyQuery({
    onError: error =>
      enqueueSnackbar(error.message, {
        variant: ALERT_TYPE.ERROR
      }),
    onCompleted: res => setUser(res.user)
  })

  useEffect(() => {
    if (Cookies.get(COOKIES.TOKEN)) {
      if (!auth.isAuthenticated) {
        getUser({
          variables: {
            email: Cookies.get(COOKIES.EMAIL) || ''
          }
        })
      }
    } else {
      enqueueSnackbar(ERROR_TYPE.UNAUTHORIZED, {
        variant: ALERT_TYPE.ERROR
      })
      navigate(ROUTES.LOGIN)
    }
  }, [auth.isAuthenticated])

  if (loading) {
    return <FullScreenLoader />
  }
  
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default AuthLayout
