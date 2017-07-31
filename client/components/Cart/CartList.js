import React from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem'

function CartList(props) {
  return (
    <div>
      <div className="row noBottomMargin">
        {
          props.cart.length !== 0 && (
            <div className="col s12 m6">
              <ul className="collection noBottomMargin noTopMargin allowOverflow">
                {
                  props.cart.slice(0, Math.round(props.cart.length / 2)).map(pkg => (
                    <CartItem pkg={pkg} key={pkg.id} />))
                }
              </ul>
            </div>)
        }
        {
          (props.cart.length > 1) && (<div className="col s12 m6">
            <ul className="collection noTopMargin allowOverflow">
              {
                props.cart.slice(Math.round(props.cart.length / 2)).map(pkg => (
                  <CartItem isLoggedIn={props.isLoggedIn} pkg={pkg} key={pkg.id} />
                ))
              }
            </ul>
          </div>)
        }
      </div>
      <div className="row">
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
      </div>
    </div>
  )
}

function mapStateToProps(state){
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
export default connect(mapStateToProps)(CartList)
