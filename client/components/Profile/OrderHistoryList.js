import React from 'react'

import OrderHistory from './OrderHistory'

export default function OrderHistoryList(props) {
  const orders = props.orders
  console.log(orders)
  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4>{orders.createdAt.substring(0,10)}</h4></li>
      {
        orders.packages.map(order => <OrderHistory key={order.id} order={order} />)
      }
      <li className="collection-item">
        <h6 className=" primaryColor-text">
          ${orders.packages.reduce(((sum, order) => sum + order.price),0)}
        </h6>
        
      </li>
    </ul>
  )
}
