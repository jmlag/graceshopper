import React from "react";

export default function Product(props) {

    const product = props.Product;

    return (
        <div>       
            <h3> {product.name} </h3>
            <img src={product.image} alt="image"/>
            <div>   
                <p>
                    {product.discription}
                </p>
            </div>
        </div>
    )
    
}