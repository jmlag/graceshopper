import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store'
import { Navbar } from 'react-materialize'
import NavItem from './NavItem'

function Nav (props) {

  return (
    <Navbar className="right secondaryColor">
      <NavItem exact to="/" index={true}>Home</NavItem>
      <NavItem to="/packages">Packages</NavItem>
      {
        props.cart.length ? (
          <NavItem to="/cart">Cart {props.cart.length}</NavItem>
        ) : (
          <NavItem to="/cart">Cart</NavItem>
        )
      }

      {
        !props.loggedIn? (
          <NavItem to="/login">Login</NavItem>
        ) : (
          <li>
            <a onClick={props.logout}>Logout</a>
          </li>
        )
      }
    </Navbar>
  )
}
const mapToState = function(state) {
  return {
    cart: state.cart,
  }
}
const mapToDispatch = {logout}

export default connect(mapToState,mapToDispatch)(Nav)
