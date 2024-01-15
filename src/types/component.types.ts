import { IUser } from 'stores/auth'
import { Post } from '../__generated/graphql'

export interface IPost extends Omit<Post, 'comments' | 'user'> {
  user: IUser | undefined | null
}
