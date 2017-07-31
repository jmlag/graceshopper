import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {Login, Signup, PackageList, Product, Cart, LandingPage, Navbar, Checkout, Profile} from './components';
import {me, getPackages,  } from './store';


/**
 * COMPONENT
 */
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
            <Route exact path="/packages/:productId" render={ (props) => (<Product
                product={{
                  name: "prod" + props.match.params.productId,
                  image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                  price: "123456",
                  description: "product" + props.match.params.productId + "description",
                }}
                productId={props.match.params.productId}
              />)}
            />
            <Route path="/profile" component={Profile} />
            <Route component={LandingPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(getPackages())
      // dispatch(fetchCart())  TODO: ONLY DO IF LOGGED IN
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
