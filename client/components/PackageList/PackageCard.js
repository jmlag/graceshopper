import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PackageCard(props){
  const pkg = props.pkg
  return (
    <div className = "col s12 m6">
      <div className = "card">
        <div className = "card-image">
          <img className = "responsive-img" src = {pkg.image} />
          <span className = "card-title">{pkg.name} - <i>{pkg.price}</i></span>
        </div>
        <div className = "card-content">
          <p>{pkg.description}</p>
        </div>
        <div className = "card-action">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
