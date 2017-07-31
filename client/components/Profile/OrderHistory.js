import React from 'react'

export default props => (
  <li className="collection-item avatar">
    <img src={props.order.imageUrl} className="circle" />
    <span className="title">{props.order.name}</span>
  </li>
)

