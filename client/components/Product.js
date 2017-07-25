import React from "react";

export default function Product(props) {

    const product = props.Product;

    return (
        <div>       
            <h3> {product.name} PRODUCT NAME PLACEHOLDER </h3>
            <img src={product.image} alt="image"/>
            <div>   
                <div>  {product.price} $CASHMONEIES </div>
                <p>
                    {product.discription} PRODUCT DESCRIPTION
                </p>
                {/* Reviews component */}
            </div>
            {/* AddToCart component */}
        </div>
    )
    
}