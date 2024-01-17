import { createBrowserRouter } from 'react-router-dom'
import Login from 'pages/login'
import Signup from 'pages/signup'
import Home from 'pages/home'
import { AuthLayout, PublicLayout } from 'components/layout'
import { ROUTES } from 'types/routes.types'
import CreatePost from 'pages/createPost'
import ProfileSetting from 'pages/profileSetting'

export const router = createBrowserRouter([
  {
    path: ROUTES.SIGNUP,
    element: <Signup />
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  },
  {
    path: ROUTES.CREATE_POST,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <CreatePost />
      },
      {
        path: ROUTES.PROFILE_SETTING,
        element: <ProfileSetting />
      }
    ]
  },
  {
    path: ROUTES.HOME,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])
