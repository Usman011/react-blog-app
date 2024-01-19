import { IUser } from 'stores/auth'
import { Post } from '../__generated/graphql'
import { ReactNode } from 'react'

export interface IPost extends Omit<Post, 'comments' | 'user'> {
  user: IUser | undefined | null
}

export interface ApolloWrapperProps {
  children: ReactNode
}

export interface IChangePasswordTab {
  prevPassword: string
  password: string
  confirmPassword: string
}

export interface ICommentReply {
  text?: string | null | undefined
  user: IUser
  id: number
}
export interface IComment {
  text?: string | null | undefined
  user: IUser
  id: number
  replies?: ICommentReply[] | null
}
