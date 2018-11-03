import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class NavBar extends Component {
  render() {
    const guestLink = (
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/">About</Link></li>
          <li className="nav-item"><Link to="/signup">Signup</Link></li>
          <li className="nav-item"><Link to="/login">Login</Link></li>
        </ul>
      </div>
    )
    const userLink =(
      <div className="navbar">
        <ul>
          <li>Dashbord</li>
          <li>Logout</li>
        </ul>
      </div>
    )
    return (
      <div>
        { guestLink }
      </div>
    )
  }
}
export default NavBar;