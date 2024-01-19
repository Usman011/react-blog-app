import { createBrowserRouter } from 'react-router-dom'
import Login from 'pages/login'
import Signup from 'pages/signup'
import Home from 'pages/home'
import { AuthLayout, PublicLayout } from 'components/layout'
import { ROUTES } from 'types/routes.types'
import CreatePost from 'pages/createPost'
import ProfileSetting from 'pages/profileSetting'
import ViewPost from 'pages/viewPost'

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
    path: ROUTES.AUTH,
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.CREATE_POST,
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
      },
      {
        path: ROUTES.VIEW_POST,
        element: <ViewPost />
      }
    ]
  }
])
