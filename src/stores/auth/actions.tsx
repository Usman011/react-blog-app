import useAuthStore, { AuthState, authInitialState } from 'stores/auth'

export const loginUser = (formData: AuthState) => {
  useAuthStore.setState(() => ({
    ...formData
  }))
}

export const logoutUser = () => {
  useAuthStore.setState(() => ({
    ...authInitialState
  }))
}
