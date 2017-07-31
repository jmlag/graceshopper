import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {Login, Signup, PackageList, Product, Cart, LandingPage, Navbar, Checkout} from './components';
import {me, getPackages} from './store';

class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {

    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <div>

          <Route path = "/" render = {() => <Navbar loggedIn = {isLoggedIn} />} />
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/packages" component={PackageList} />
            <Route exact path="/packages/:productId" component={Product} />
            <Route component={LandingPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(getPackages())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
