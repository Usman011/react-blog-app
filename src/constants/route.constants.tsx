import { createBrowserRouter } from 'react-router-dom'
import Login from 'pages/login'
import Signup from 'pages/signup'
import Home from 'pages/home'
import { AuthLayout, PublicLayout } from 'components/layout'
import { ROUTES } from 'types/routes.types'

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
    path: ROUTES.HOME,
    element: <PublicLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />
      }
    ]
  }
])
