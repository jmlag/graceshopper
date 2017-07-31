import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { putCart, updateTempCart } from '../../store'

function PackageCard(props){
  const pkg = props.pkg
  return (
    <div className="col s12 m6">
      <div className="card">
        <NavLink to={`/packages/${pkg.id}`}>
          <div className="card-image">
            <img className="responsive-img" src={pkg.imageUrl} />
          </div>
        </NavLink>
        <div className="card-content">
          <h3>{pkg.name} - ${pkg.price}</h3>
        </div>
        <div className="card-action">
          <button
          className="btn tertiaryColor"
          onClick={() => props.addToCart(pkg)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
function mapStateToProps(state, oldProps) {
  return {
    pkg: oldProps.pkg,
  }
}

function mapDispatchToProps(dispatch, oldProps) {
  return {
    addToCart(pkg){
      if(oldProps.isLoggedIn){
        dispatch(putCart(pkg))
      } else {
        dispatch(updateTempCart(pkg))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageCard)
