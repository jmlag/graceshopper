import React from 'react'
import { connect } from 'react-redux'

import { deleteCartItem } from '../../store'

function CartItem(props){
  const pkg = props.pkg

  return (
    <li key={pkg.id} className="collection-item avatar">
      <img src = {pkg.imageUrl} className="circle" />
      <span className="collection-title collection-title-heavy">{pkg.name}</span>
      <p>
        ${pkg.price}
        <br />
        {pkg.quantity} in cart
      </p>
      <a className="secondary-content clickable" onClick = {() => props.delCartItem(pkg.id)}>
        <i className="material-icons secondaryColor-text">
          delete
        </i>
      </a>
    </li>
  )
}

function mapStateToProps(state, oldProps){
  return {
    pkg: oldProps.pkg,
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
