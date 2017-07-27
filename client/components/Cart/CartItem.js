import React from 'react'

export default function CartItem(props){
  const pkg = props.pkg

  return (
    <li key={pkg.id} className="collection-item avatar">
      <img src = {pkg.image} className="circle" />
      <span className="collection-title collection-title-heavy">{pkg.name}</span>
      <p>
        ${pkg.price}
      </p>
    </li>
  )
}
