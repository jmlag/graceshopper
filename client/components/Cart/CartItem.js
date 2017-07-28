import React, {Component} from 'react'
import { connect } from 'react-redux'
import { destroyCartItem, deleteCartItem } from '../../store'

import EditCart from './EditCart'

class CartItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      showEdit: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    console.log('handleChange')
    e.preventDefault()
    this.setState({showEdit: !this.state.showEdit})
  }
  render(){
    const pkg = this.props.pkg
    return (
      <li key={pkg.id} className="collection-item avatar">
        <img src = {pkg.imageUrl} className="circle" />
        <span className="collection-title collection-title-heavy">{pkg.name}</span>
        <p>
          ${pkg.price}
          <br />
          {pkg.quantity} in cart
        </p>
        <div className="secondary-content">
          <a onClick={this.handleChange}>
            <i className="material-icons secondaryColor-text clickable">
              edit
            </i>
          </a>
          <a onClick={this.props.deleteFromCart}>
            <i className="material-icons secondaryColor-text clickable">
              delete
            </i>
          </a>
        </div>
        {this.state.showEdit && <EditCart isLoggedIn={this.props.isLoggedIn} pkg={pkg} quantity={pkg.quantity} />}
      </li>
    )
  }
}

function mapStateToProps(state, oldProps){
  return {
    pkg: oldProps.pkg,
    cart: state.cart,
    isLoggedIn: oldProps.isLoggedIn,
  }
}

function mapDispatchToProps(dispatch, oldProps){
  return {
    deleteFromCart(){
      if (oldProps.isLoggedIn){
        dispatch(destroyCartItem(oldProps.pkg.id))
      } else {
        dispatch(deleteCartItem(oldProps.pkg.id))
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
