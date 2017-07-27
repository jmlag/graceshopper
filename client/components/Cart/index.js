import React from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem'

//map half the cart items to one column and the other half to the other
function Cart(props){
  return (
    <div className="container">
      <br /><br />
      <h1 className="header center mainColor-text">Cart</h1>
      <br /><br />
      <div className="row">
        <div className="col s12 m6">
          <ul className="collection">
            {
            props.cart.slice(0, Math.round(props.cart.length / 2)).map(pkg => (
            <CartItem pkg = {pkg} key = {pkg.id} />))
            }
          </ul>
        </div>
        <div className="col s12 m6">
          <ul className="collection">
            {
            props.cart.slice(Math.round(props.cart.length / 2)).map(pkg => (
            <CartItem pkg = {pkg} key = {pkg.id} />
            ))
            }
          </ul>
        </div>
      </div>
      <div className="row center">
        <div className="col s12 m6">
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className = "collapsible-header">FIRST</div>
            </li>
          </ul>
        </div>
        <div className="col s12 m6">
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className = "collapsible-header">SECOND</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    // cart: state.cart,
    cart: [{
      id: 1,
      name: "SHIRT",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
      price: 100,
    },{
      id: 2,
      name: "SHIRT",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
      price: 101,
    },{
      id: 3,
      name: "SHIRT",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
      price: 102,
    },{
      id: 4,
      name: "SHIRT",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
      price: 103,
    },{
      id: 5,
      name: "SHIRT",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
      price: 104,
    },{
      id: 6,
      name: "SHIRT",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
      price: 105,
    },]
  }
}

export default connect(mapStateToProps)(Cart)
