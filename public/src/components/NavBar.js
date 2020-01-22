import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <div>
    <div id="page-title">
      <Link to="/">lens.ly</Link> 
    </div>
    <Link to="/about" className="nav-option">About Us</Link> 
    <Link to="/lenses" className="nav-option">Our Lenses</Link> 
    <Link to="/order-lenses" className="nav-option">Order Replacement Lenses</Link>
    <div id="login-button">
    <Link to="/login">Login</Link>
    </div>
    </div>
  </div>
)

export default NavBar