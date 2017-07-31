import React from 'react'
import { connect } from 'react-redux'

function Checkout(props){
  return (
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className="header center mainColor-text">Checkout</h1>
        <div className="row noBottomMargin">
          <div className="col s12 m6">
            <ul className="collection">
              {
                props.cart.map(cartItem => (
                  <div>a</div>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Checkout)
