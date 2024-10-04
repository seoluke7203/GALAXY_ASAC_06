import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from '@/Pages/Landing/LandingPage'
import Layout from '@/components/Layout/Layout'
import TicketingPage from '@/Pages/Ticketing/TicketingPage'
import LoginPage from '@/Pages/Login/LoginPage'
import SeatSelect from '@/components/TicketingComponents/SeatSelect'
import RegisterPage from '@/Pages/Register/RegisterPage'
import Header from '@/components/Layout/Header'
import PaymentInfo from '@/components/paymentComponents/paymentInfo'
import PaymentCompeletedPage from '@/Pages/payment/PaymentCompleted'

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
        path: '/ticketing',
        element: <TicketingPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/seatselect',
    element: <SeatSelect />,
  },
  {
    path: '/Register',
    element: <RegisterPage />,
  },
  {
    path: '/payment',
    element: <PaymentInfo />,
  },
  {
    path: '/paymentCompleted',
    element: <PaymentCompeletedPage />,
  },
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
