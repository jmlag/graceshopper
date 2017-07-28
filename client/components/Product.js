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
            <span>Product Category Placeholder</span>
            <h1>
              {product.name}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque aliquam facilisis augue, quis placerat lectus
              bibendum a. Pellentesque vulputate, tortor eget aliquam congue,
              libero ligula pharetra odio, non efficitur justo lorem at nunc.
              Nunc nec neque nec turpis ornare vehicula sed venenatis mi. Cras
              maximus scelerisque viverra. Aenean imperdiet eros eu urna
              consectetur ultrices. Morbi in tincidunt nunc. In semper tristique
              neque at hendrerit. Vestibulum lacinia turpis id convallis semper.
              Donec scelerisque et quam ac venenatis. Mauris non pulvinar dolor.
              Fusce placerat rhoncus tortor, sed finibus lectus facilisis in.
              Etiam quis vestibulum sem. Nam et nisi sollicitudin nisi iaculis
              dapibus. Nullam ornare dictum euismod. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
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
