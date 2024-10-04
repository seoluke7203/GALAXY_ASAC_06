import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import { Outlet } from 'react-router-dom'
import EventBanner from '@/components/Layout/EventBanner'


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <EventBanner />
      <Footer />
    </>
  )
}

export default Layout
