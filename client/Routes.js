import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {Login, Signup, PackageList, Product, Cart, LandingPage, Navbar, Checkout, Profile} from './components';
import {me, getPackages} from './store';

class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const { isLoggedIn, cartSize } = this.props

    return (
      <Router history={history}>
        <div>

          <Route path = "/" render = {() => <Navbar loggedIn = {isLoggedIn} />} />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/packages" component={PackageList} />
            <Route exact path="/packages/:productId" component={Product} />
            {!!cartSize && <Route exact path="/checkout" component={Checkout} />}
            {isLoggedIn && <Route exact path="/profile" component={Profile} />}
            <Route component={LandingPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart,
    cartSize: state.cart.reduce((sum, cartItem) => sum + +cartItem.quantity, 0)
    // why not just make a 'cartNotEmpty' prop instead of the !!cartSize,
    // it is clearer and more direct when in use in the component itself
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(getPackages())
    },
  }
}

export default connect(mapState, mapDispatch)(Routes)

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
