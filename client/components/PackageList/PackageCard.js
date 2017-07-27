import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { addCartItem } from '../../store'

function PackageCard(props){
  const pkg = props.pkg
  return (
    <div className="col s12 m6">
      <div className="card">
        <NavLink to={`/packages/${pkg.id}`}>
          <div className="card-image">
            <img className="responsive-img" src={pkg.image} />
          </div>
        </NavLink>
        <div className="card-content">
          <h3>{pkg.name} - ${pkg.price}</h3>
        </div>
        <div className="card-action">
          <button
          className="btn tertiaryColor"
          onClick={() => props.addToCart(pkg.id)}
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

function mapDispatchToProps(dispatch) {
  return {
    addToCart(id){
      dispatch(addCartItem(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageCard)
