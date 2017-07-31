import React from 'react'

import CheckoutForm from './CheckoutForm'
import CartList from '../Cart/CartList'

export default function Checkout(props){
  return (
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className="header center mainColor-text">Checkout</h1>
        <CartList />
        <CheckoutForm />
      </div>
    </div>
  )
}
