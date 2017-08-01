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
    // if next state depends on previous state, it's best to use a callback
    // since setState is asynchronous. this switch is pretty small and may not 
    // cause even cause much issue, but better safe than sorry!
    this.setState({showEdit: !this.state.showEdit})
  }

  render(){
    const pkg = this.props.pkg
    return (
      <li key={pkg.id} className="collection-item avatar">
        <img src={pkg.imageUrl} className="circle" />
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

function mapStateToProps(state, oldProps){ // not so much that they are 'old' props, but 'own' props?
  // also, you do not need to 'forward' these ownProps, they will be passed down anyway...
  return {
    pkg: oldProps.pkg, // ... so this,
    cart: state.cart,
    isLoggedIn: oldProps.isLoggedIn, // ... and this
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
