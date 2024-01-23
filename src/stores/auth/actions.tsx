import useAuthStore, { IUser, authInitialState } from 'stores/auth'
import Cookies from 'js-cookie'
import { COOKIES } from 'types/form.types'
import { client } from 'components/apolloWrapper'

export const setUser = (formData: IUser) => {
  useAuthStore.setState(() => ({
    user: { ...formData },
    isAuthenticated: true
  }))
}

export const logoutUser = () => {
  Cookies.remove(COOKIES.TOKEN)
  client.clearStore()

  useAuthStore.setState(() => ({
    ...authInitialState
  }))
}
