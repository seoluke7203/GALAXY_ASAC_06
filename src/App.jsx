// import Header from '@/Pages/Layout/Header'
// import './App.css'
// import Router from './Router'
// import Footer from '@/Pages/Layout/Footer'

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <Router></Router>
//       <Footer />
//     </div>
//   )
// }

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './Router'
import LandingPage from '@/Pages/Landing/LandingPage'
import Layout from '@/components/Layout/Layout'
import TicketingPage from '@/Pages/Ticketing/TicketingPage'

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
    element: <TicketingPage />,
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
