import React from 'react'
import { connect } from 'react-redux'
import { getHistory } from '../../store'

import OrderHistoryList from './OrderHistoryList'

class Profile extends React.Component {
  componentDidMount(){
    this.props.loadInitalData()
  }

  render(){
    return (
      <div className="section no-pad-bot">
        <div className="container">
          <br /><br />
          <h1 className="header center mainColor-text">Profile</h1>
          <div className="row noBottomMargin">

          </div>
          {
            this.props.orderHistory.map(orders => (
              <OrderHistoryList key={orders.id} orders={orders} />
            ))
          }
        </div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
