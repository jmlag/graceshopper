import React from 'react'
import { connect } from 'react-redux'

import { Navbar } from 'react-materialize'
import NavItem from './NavItem'

function Nav (props) {

  return (
    <Navbar className="right secondaryColor">
      <NavItem exact to="/" index={true}>Home</NavItem>
      <NavItem to="/packages">Packages</NavItem>
      {
        !props.loggedIn? (
          <NavItem to="/login">Login</NavItem>
        ) : (
          <NavItem to="/logout">Logout</NavItem>
        )
      }
    </Navbar>
  )
}


export default connect()(Nav)
