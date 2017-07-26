import React from "react";

export default function Review(props) {

    const review = props.review; //|| 
    const user = props.user || "USER NAME";

    return (
        <div>   
            <p>Rating: {review.score}/5 </p> 
            <h3> {user} </h3>
            <p>Date: {review.date}</p>
            <p>
                {review.writtenReview +" "+ review.productId} 
            </p>
        </div>
    );
}