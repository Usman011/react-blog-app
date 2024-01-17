import useAuthStore, { IUser, authInitialState } from 'stores/auth'
import Cookies from 'js-cookie'
import { COOKIES } from 'types/form.types'

export const setUser = (formData: IUser) => {
  useAuthStore.setState(() => ({
    user: { ...formData },
    isAuthenticated: true
  }))
}

export const logoutUser = () => {
  Cookies.remove(COOKIES.EMAIL)
  Cookies.remove(COOKIES.TOKEN)

  useAuthStore.setState(() => ({
    ...authInitialState
  }))
}
