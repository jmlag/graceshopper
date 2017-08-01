import React from 'react';
import ReviewBox from './ReviewBox';
import Review from './Reviewlist';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getReviews, putCart, updateTempCart } from '../store';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getReviews(this.props.productId)
  }

  render() {
    let pkg = this.props.pkg[this.props.productId] || { name: "hi", description: "" };
    return (
      <div className="container">
        <div className="row">
          <div className="thumbnail col s6">
            <img className="responsive-img" data-image="black" src={pkg.imageUrl} alt="" />
          </div>

          <div className="col s6">
            <div className="product-description">
              <span>Product Category Placeholder</span>
              <h1>
                {pkg.name}
              </h1>
              <p>
                {pkg.description}
              </p>
            </div>

            <div className="product-configuration">
              <div className="plan-config">
                <span>Plan configuration</span>
                <div className="plan-choose">
                  <button className="waves-effect waves-teal btn-flat">
                    Basic
                  </button>
                  <button className="waves-effect waves-teal btn-flat">
                    Plus
                  </button>
                  <button className="waves-effect waves-teal btn-flat">
                    Premium
                  </button>
                </div>

              </div>
            </div>

            <div className="price-text">
            Price:
              <span className="price-text mainColor-text ">
                 ${pkg.price}
              </span>
              <button
              onClick={() => this.props.addToCart(pkg)}
              className="waves-effect waves-light tertiaryColor btn right">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <ReviewBox packageId={this.props.productId} />
        <Review />
      </div>
    );
  }
}

const mapToState = (store, oldProps) => {
  return {
    pkg: store.packages,
    productId: +oldProps.match.params.productId
  };
};

const mapToDispatch = (dispatch, oldProps) => {
  return {
    getReviews,
    addToCart(pkg){
      if(oldProps.isLoggedIn){
        dispatch(putCart(pkg))
      } else {
        dispatch(updateTempCart(pkg))
      }
    }
  }
}

export default withRouter(connect(mapToState, mapToDispatch)(Product));
