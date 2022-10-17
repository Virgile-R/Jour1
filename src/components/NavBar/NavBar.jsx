import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className='nav-link' to="/">Home</Link>
      </li>
      <li className="nav-item">
          <Link className='nav-link' to='/contact'>Contact</Link>
      </li>
    </ul> 
    </nav>
  )
}

export default NavBar