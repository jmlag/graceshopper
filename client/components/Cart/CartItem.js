import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deleteCartItem } from '../../store'

import { Dropdown, Button, NavItem } from 'react-materialize'
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
          <i className="material-icons secondaryColor-text">
            delete
          </i>
        </div>
        {this.state.showEdit && <EditCart pkg={pkg} quantity={pkg.quantity} />}
      </li>
    )
  }
}

function mapStateToProps(state, oldProps){
  return {
    pkg: oldProps.pkg,
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch){
  return {
    delCartItem(packageId){
      dispatch(deleteCartItem(packageId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
