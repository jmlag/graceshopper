// general comment about guest carts - they would not persist across sessions
// the way that it's handled right now, correct?

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CartList from './CartList'

//map half the cart items to one column and the other half to the other
function Cart(props){
  return (
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className="header center mainColor-text">Cart</h1>
        <CartList />
        <div className = "row">
          <div className = "col s6 offset-s6">
            <Link to="/checkout">
              <button className="btn tertiaryColor waves-effect">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
function mapStateToProps(state){
  return {
    cart: state.cart.map(cartItem => {
      // i've seen this exact function used in another mapState function.
      // can it be more dry? abstract it into a utility file?
      // better yet, perhaps a thunk? (remember, thunks don't have to be reserved
      // making server requests! It can be for any sub-routine of actions)
      // why do we need to do these operations anyway?
      let out = state.packages[cartItem.packageId]
      out.quantity = cartItem.quantity
      out.edit = false
      return out
    }),
  }
}

export default connect(mapStateToProps)(Cart)
