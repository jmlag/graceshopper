import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHistory } from '../../store'

class OrderHistoryList extends Component {
  componentDidMount(){
    this.props.loadInitalData()
  }

  render(){
    return (

    )
  }
}

function mapStateToProps(state){
  return {
    orderHistory: orderHistory,
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadInitalData(){
      dispatch(getHistory())
    }
  }
}
export default connect()(OrderHistoryList)
