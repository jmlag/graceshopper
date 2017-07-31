import React from "react";
import ReviewBox from "./ReviewBox";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router'
import { connect } from 'react-redux';
import { readPackages } from '../store'

 function Product(props) {
  //somewhere in the oldProps is the param -> productId -> 
  let pkg = props.pkg[props.productId] || {name: 'hi',description:"" };

  console.log(pkg)
  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <img data-image="black" src={props.thumbnail} alt="" />
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

    <ReviewBox packageId="1"/>

    </div>
  );
}

const mapToState = (store, oldProps) => {
  return {
    pkg: store.packages,
    productId:+oldProps.match.params.productId
  }
}
const mapToDispatch = null;


export default withRouter(connect(mapToState, mapToDispatch)(Product))
