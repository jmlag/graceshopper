import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {Main, Login, Signup, UserHome, ProductsList, Product, Cart, ReviewsList} from './components'; 
import {me} from './store';

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
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} /> 
            <Route exact path="/packages" component={ProductsList} /> 
            <Route exact path="packages/:productId/reviews" render={ props => (
              <ReviewsList
                reviews={[{
                  score: 2.3,
                  writtenReview: "review for product",
                  date: "December 27, 2017",
                  productId: 1,
                },
                {
                  score: 3.9,
                  writtenReview: "review for product",
                  date: "December 28, 2017",
                  productId: 2,
                }
                ]} 
              />
            ) } />
            <Route path="/packages/:productId" render={ props => (<Product 
                product={{
                  name: "prod" + props.match.params.productId,
                  image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                  price: "123456",
                  description: "product" + props.match.params.productId + "description",
                }} 
                productId={props.match.params.productId}
              />)} 
            /> 
            {
              isLoggedIn ?
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/home" component={UserHome} />
                </Switch> : null
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
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
