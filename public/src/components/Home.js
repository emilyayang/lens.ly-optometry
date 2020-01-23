import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <div>
      New prescription lenses for your own frames
    </div>
    <div>
      Save time and maximize convenience by
    </div>

    <Link to="/order-lenses" className="nav-option">Choose Your New Lenses</Link>

  </div>
)

export default Home