

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from '@/Pages/Landing/LandingPage'
import Layout from '@/components/Layout/Layout'
import TicketingPage from '@/Pages/Ticketing/TicketingPage'
import LoginPage from '@/Pages/Login/LoginPage'
import SeatSelete from '@/components/TicketingComponents/SeatSelect'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/ticketing',
    element: <TicketingPage />,
  },
  {
    path: '/seatselect',
    element: <SeatSelete />,
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
