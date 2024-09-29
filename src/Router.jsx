import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import LandingPage from './Pages/Landing/LandingPage'
import TicketingPage from './Pages/Ticketing/TicketingPage'
import LoginPage from './Pages/Login/LoginPage'

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
        <br />
        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' click' : '')} to='/login'>
          {' '}
          Login Page
        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ticketing' element={<TicketingPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
