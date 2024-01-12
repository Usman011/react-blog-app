import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Cookies from 'js-cookie'
import { useSnackbar } from 'notistack'

import Footer from 'components/common/Footer'
import Navbar from 'components/common/Navbar'
import useAuthStore, { AuthState } from 'stores/auth'
import { ALERT_TYPE, COOKIES } from 'types/form.types'
import { ROUTES } from 'types/routes.types'
import { useGetUserLazyQuery } from '__generated/graphql'

const AuthLayout: React.FC = () => {
  const auth: AuthState = useAuthStore()
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [getUser, { loading }] = useGetUserLazyQuery({
    onError: error =>
      enqueueSnackbar(error.message, {
        variant: ALERT_TYPE.ERROR
      })
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
      navigate(ROUTES.LOGIN)
    }
  }, [auth.isAuthenticated])

  if (loading) {
    return <h1> LoAdInG ......</h1>
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AuthLayout
