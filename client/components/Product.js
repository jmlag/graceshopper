import React from "react";
import ReviewsList from "./ReviewsList";

export default function Product(props) {

    const { product } = props;
    const pkg = props.pkg
    const thumbnail = props.thumbnail || false;
    const productId = props.productId;
    const reviews = [{ score: 3, 
                       writtenReview: "review for product", 
                       date: 'December 25, 2017', 
                       productId: "1" },
                     { score: 4, 
                       writtenReview: "revieW for product", 
                       date: 'December 29, 2017', 
                       productId: "2" }];
         
    return (
        <div>
            <h3> {product.name} </h3>
            <img src={product.image} alt="image"/>
            <div>  ${product.price} </div>
            {
                (!thumbnail ? (
                <div>
                    PRODUCT {productId} DESCRIPTION <br/>
                    <ReviewsList reviews={reviews} productId={productId} /> 
                    ADD TO CART COMPONENT <br/>
                </div>) : "")
            }
        </div>
    )
}
