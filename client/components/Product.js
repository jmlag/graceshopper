import React from "react";
import ReviewsList from "./ReviewsList";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  const pkg = props.pkg;
  const thumbnail = props.thumbnail || false;
  const productId = props.productId;
  const reviews = [
    {
      score: 3,
      writtenReview: "review for product",
      date: "December 25, 2017",
      productId: "1"
    },
    {
      score: 4,
      writtenReview: "revieW for product",
      date: "December 29, 2017",
      productId: "2"
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <img data-image="black" src={props.thumbnail} alt="" />
        </div>

        <div className="col s6">
          <div className="product-description">
            <span>Headphones</span>
            <h1>
              {product.name}
            </h1>
            <p>
              The preferred choice of a vast range of acclaimed DJs. Punchy,
              bass-focused sound and high isolation. Sturdy headband and on-ear
              cushions suitable for live performance
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
              {product.price}
            </span>
            <button className="waves-effect waves-light btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
