import { Outlet } from 'react-router'
import Footer from 'components/common/Footer'
import Navbar from 'components/common/Navbar'

const PublicLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout
