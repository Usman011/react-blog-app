import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from 'components/layout'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import Home from 'pages/Home'

export const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])
