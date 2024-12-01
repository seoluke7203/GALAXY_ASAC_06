import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from '@/Pages/Landing/LandingPage'
import Layout from '@/components/Layout/Layout'
import TicketingPage from '@/Pages/Ticketing/TicketingPage'
import LoginPage from '@/Pages/Login/LoginPage'
import SeatSelect from '@/components/TicketingComponents/SeatSelect'
import RegisterPage from '@/Pages/Register/RegisterPage'
import PaymentPage from '@/Pages/payment/PaymentPage'
import PaymentCompeletedPage from '@/Pages/payment/PaymentCompleted'
import IsLoginProvider from '@/context/IsLoginContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/:genre',
        element: <LandingPage />,
      },
      {
        path: '/ticketing/:productId',
        element: <TicketingPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/seatSelect',
    element: <SeatSelect />,
  },
  {
    path: '/Register',
    element: <RegisterPage />,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
  },
  {
    path: '/paymentCompleted',
    element: <PaymentCompeletedPage />,
  },
])

function App() {
  return (
    <div className='App'>
      <IsLoginProvider>
        <RouterProvider router={router} />
      </IsLoginProvider>
    </div>
  )
}

export default App
