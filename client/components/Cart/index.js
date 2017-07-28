import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'

//map half the cart items to one column and the other half to the other
function Cart(props){
  return (
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className="header center mainColor-text">Cart</h1>
        <div className="row noBottomMargin">
          {
            props.cart.length !== 0 && (
            <div className="col s12 m6">
              <ul className="collection noBottomMargin noTopMargin allowOverflow">
                {
                props.cart.slice(0, Math.round(props.cart.length / 2)).map(pkg => (
                <CartItem pkg = {pkg} key = {pkg.id} />))
                }
              </ul>
            </div>)
          }
          {
            (props.cart.length > 1) && (<div className="col s12 m6">
              <ul className="collection noTopMargin allowOverflow">
                {
                props.cart.slice(Math.round(props.cart.length / 2)).map(pkg => (
                <CartItem isLoggedIn={props.isLoggedIn} pkg = {pkg} key = {pkg.id} />
                ))
                }
              </ul>
            </div>)
          }
        </div>
        <div className = "row">
          <div className = "col s6 m3 offset-m6">
            <h5 className="inline mainColor-text">Total Cost: </h5>
            <h5 className="light inline">
              $
              {
              props.cart.reduce((sum, pkg) => (
                sum + pkg.price * pkg.quantity
              ), 0)
              }
            </h5>
          </div>
          <div className = "col s6 m3">
            <Link to="/checkout">
              <button className="right btn tertiaryColor waves-effect">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cartObj: state.cart,
    cart: state.cart.map(cartItem => {
      let out = state.packages[cartItem.packageId]
      out.quantity = cartItem.quantity
      out.edit = false
      return out
    }),
    isLoggedIn: !!state.user.id,
  }
}

export default connect(mapStateToProps)(Cart)
