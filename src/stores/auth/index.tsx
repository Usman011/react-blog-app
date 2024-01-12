import { create } from 'zustand'
import { loginUser, logoutUser } from './actions'
import { User } from '__generated/graphql'

interface IUser extends Omit<User, 'comments' | 'posts'> {
  isAuthenticated: boolean
}

export interface AuthState {
  token: string
  user: IUser
}

const authInitialState: AuthState = {
  token: '',
  user: {
    email: '',
    firstName: '',
    id: -1,
    lastName: '',
    password: '',
    isAuthenticated: false
  }
}

const useAuthStore = create(() => ({
  ...authInitialState
}))

export default useAuthStore
export { logoutUser, loginUser, authInitialState }
