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
import GuardLayout from '@/lib/GuardLayout'

const routerData = [
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
    withAuth: false,
  },
  {
    path: '/login',
    element: <LoginPage />,
    withAuth: false,
  },
  {
    path: '/seatSelect',
    element: <SeatSelect />,
    withAuth: true,
  },
  {
    path: '/Register',
    element: <RegisterPage />,
    withAuth: false,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
    withAuth: true,
  },
  {
    path: '/paymentCompleted',
    element: <PaymentCompeletedPage />,
    withAuth: true,
  },
]

const router = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <GuardLayout>{router.element}</GuardLayout>,
        children: router.children,
      }
    } else {
      return {
        path: router.path,
        element: router.element,
        children: router.children,
      }
    }
  }),

  // [{
  //   path: '/',
  //   element: <Layout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <LandingPage />,
  //     },
  //     {
  //       path: '/:genre',
  //       element: <LandingPage />,
  //     },
  //     {
  //       path: '/ticketing/:productId',
  //       element: <TicketingPage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/login',
  //   element: <LoginPage />,
  // },
  // {
  //   path: '/seatSelect',
  //   element: <SeatSelect />,
  // },
  // {
  //   path: '/Register',
  //   element: <RegisterPage />,
  // },
  // {
  //   path: '/payment',
  //   element: <PaymentPage />,
  // },
  // {
  //   path: '/paymentCompleted',
  //   element: <PaymentCompeletedPage />,
  // },]
)

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
