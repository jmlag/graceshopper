import React from "react";
import ReviewBox from "./ReviewBox";
import Review from "./Reviewlist";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getReviews } from "../store";

class Product extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount(){
    this.props.getReviews(this.props.productId)
  }

  render() {
    let pkg = this.props.pkg[this.props.productId] || { name: "hi", description: "" };
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <img className="thumbnail" data-image="black" src={pkg.imageUrl} alt="" />
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
                <a href="#">What Plan is best for you?</a>
              </div>
            </div>

            <div className="product-price">
              <span>
                {pkg.price}
              </span>
              <button className="waves-effect waves-light btn">
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
const mapToDispatch = {getReviews};

export default withRouter(connect(mapToState, mapToDispatch)(Product));
