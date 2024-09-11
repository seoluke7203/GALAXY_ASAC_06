import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import LandingPage from './Pages/Landing/LandingPage'
import TicketingPage from './Pages/Ticketing/TicketingPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' click' : '')} to='/'>
          Landing Page
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => 'nav-link' + (isActive ? ' click' : '')}
          to='/ticketing'
        >
          Ticketing Page{' '}
        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ticketing' element={<TicketingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
