import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store'
import { Navbar } from 'react-materialize'
import NavItem from './NavItem'

function Nav (props) {
  const cartSize = props.cartSize
  return (
    <Navbar className="right secondaryColor">
      <NavItem exact to="/" index={true}>Home</NavItem>
      <NavItem to="/packages">Packages</NavItem>
      {
        cartSize ? (
          <NavItem to="/cart">Cart {cartSize}</NavItem>
        ) : (
          <NavItem to="/cart">Cart</NavItem>
        )
      }
      {
        props.loggedIn && !!cartSize && <NavItem to="/checkout">Checkout</NavItem>
      }
      {
        props.loggedIn && <NavItem to="/profile">Profile</NavItem>
      }
      {
        !props.loggedIn ? (
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
    cartSize: state.cart.reduce((sum, cartItem) => sum + +cartItem.quantity, 0)
  }
}
const mapToDispatch = {logout}

export default connect(mapToState, mapToDispatch)(Nav)
