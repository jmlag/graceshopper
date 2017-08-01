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
function mapStateToProps(state, oldProps) { //ownProps
  return {
    pkg: oldProps.pkg,
  }
}

function mapDispatchToProps(dispatch, oldProps) { //ownProps
  return {
    addToCart(pkg){ // once again, repetitive logic across files when mapping props
      // consider refactoring into a thunk or similar
      if(oldProps.isLoggedIn){
        dispatch(putCart(pkg))
      } else {
        dispatch(updateTempCart(pkg))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageCard)
