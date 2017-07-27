import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'

export default function nav (props) {

  return (
    <Navbar className= "right secondaryColor">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/packages">Packages</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      {
        !props.loggedIn ? (
          <li><Link to = "/login">Login</Link></li>
        ) : (
          <li><Link to = "/logout">Logout</Link></li>
        )
      }
    </Navbar>
  )
}
