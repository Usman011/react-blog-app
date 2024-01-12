import { create } from 'zustand'
import { setUser, logoutUser } from './actions'
import { User } from '__generated/graphql'

export type IUser = Omit<User, 'comments' | 'posts' | 'password'>

export interface AuthState {
  token: string
  user: IUser
  isAuthenticated: boolean
}

const authInitialState: AuthState = {
  token: '',
  user: {
    email: '',
    firstName: '',
    id: -1,
    lastName: '',
  },
  isAuthenticated: false
}

const useAuthStore = create(() => ({
  ...authInitialState
}))

export default useAuthStore
export { logoutUser, setUser, authInitialState }
