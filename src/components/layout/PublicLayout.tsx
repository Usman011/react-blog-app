import { Outlet } from 'react-router'
import Footer from 'components/common/Footer'
import Navbar from 'components/common/navbar'
import Cookies from 'js-cookie'
import { setUser } from 'stores/auth'
import { useSnackbar } from 'notistack'
import { useGetUserLazyQuery } from '__generated/graphql'
import { ALERT_TYPE, COOKIES } from 'types/form.types'
import { useEffect } from 'react'
import FullScreenLoader from 'components/common/FullScreenLoader'
import { Box } from '@mui/material'

const PublicLayout: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [getUser, { loading }] = useGetUserLazyQuery({
    onError: error =>
      enqueueSnackbar(error.message, {
        variant: ALERT_TYPE.ERROR
      }),
    onCompleted: res => setUser(res.user)
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
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout
