import { createBrowserRouter } from 'react-router-dom'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import Home from 'pages/Home'
import { AuthLayout } from 'components/layout'
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
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />
      }
    ]
  }
])
