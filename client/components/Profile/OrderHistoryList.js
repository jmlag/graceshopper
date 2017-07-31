import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHistory } from '../../store'

import OrderHistory from './OrderHistory'

class OrderHistoryList extends Component {
  componentDidMount(){
    this.props.loadInitalData()
  }

  render(){
    const orderHistory = this.props.orderHistory
    return (
      <ul className="collection">
        {
          orderHistory.map(order => (
            <OrderHistory order={order} />
          ))
        }
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    orderHistory: state.orderHistory,
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadInitalData(){
      dispatch(getHistory())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryList)
