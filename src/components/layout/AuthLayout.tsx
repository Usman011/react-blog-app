import { Outlet } from 'react-router'
import Footer from 'components/common/Footer'
import Navbar from 'components/common/Navbar'

const AuthLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AuthLayout
