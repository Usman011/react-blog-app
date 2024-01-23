import { FC, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Cookies from 'js-cookie'

import useAuthStore, { AuthState, logoutUser, setUser } from 'stores/auth'
import { COOKIES, ERROR_TYPE } from 'types/form.types'
import { ROUTES } from 'types/routes.types'
import { useGetUserLazyQuery } from '__generated/graphql'
import { Box } from '@mui/material'
import Navbar from 'components/common/navbar'
import FullScreenLoader from 'components/common/FullScreenLoader'
import { ALERT } from 'components/notistack'

const AuthLayout: FC = () => {
  const auth: AuthState = useAuthStore()
  const navigate = useNavigate()
  const [getUser, { data, loading }] = useGetUserLazyQuery({
    onError: error => ALERT.error(error.message),
    onCompleted: res => setUser(res.user)
  })

  console.log('data', data)

  useEffect(() => {
    if (Cookies.get(COOKIES.TOKEN)) {
      if (!auth.isAuthenticated) {
        getUser()
      }
    } else {
      logoutUser()
      ALERT.error(ERROR_TYPE.UNAUTHORIZED)
      navigate(ROUTES.LOGIN)
    }
  }, [auth.isAuthenticated])

  if (loading) {
    return <FullScreenLoader />
  }

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          minHeight: 'calc(100vh - 175px)',
          height: '100%'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default AuthLayout
