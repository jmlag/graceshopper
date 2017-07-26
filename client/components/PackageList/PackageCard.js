import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PackageCard(props){
  const pkg = props.pkg
  return (
    <div className = "col s12 m6">
      <div className = "card">
        <NavLink to = {`/packages/${pkg.id}`}>
          <div className = "card-image">
            <img className = "responsive-img" src = {pkg.image} />
          </div>
        </NavLink>
        <div className = "card-content">
          <h3>{pkg.name} - ${pkg.price}</h3>
        </div>
        <div className = "card-action">
          <button className = "btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
