import useAuthStore, { IUser, authInitialState } from 'stores/auth'

interface ILoginForm {
  token: string
  user: IUser
}

export const setUser = (formData: ILoginForm) => {
  useAuthStore.setState(() => ({
    ...formData,
    isAuthenticated: true
  }))
}

export const logoutUser = () => {
  useAuthStore.setState(() => ({
    ...authInitialState
  }))
}
