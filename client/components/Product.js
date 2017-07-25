import React from "react";

export default function Product(props) {

    const { product } = props;
    const thumbnail = props.thumbnail || false;    
    const productId = props.productId;

    return (
        <div> 
            <h3> {product.name} </h3>
            <img src={product.image} alt="image"/>
            <div>  ${product.price} </div>
            {
                !thumbnail ? (
                <div>   
                    PRODUCT {productId} DESCRIPTION <br/>
                    REVIEWS COMPONENT <br/>
                    ADD TO CART COMPONENT <br/>    
                </div>) : ""
            }

        </div>
    )
    
}