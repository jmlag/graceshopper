import React from "react";

export default function Review(props) {

    const review = props.review || { score: Math.trunc(Math.random()*5), writtenReview: "review for product", date: 'December 25, 2017', productId: 1};
    const user = props.user || "USER NAME";

    return (
        <div>   
            <h3> {user} </h3>
            <p>Rating: {review.score}/5 </p> 
            <p>Date: {review.date}</p>
            <p>
                {review.writtenReview +" "+ review.productId} 
            </p>
            {/* add delete button if admin? */}
        </div>
    );
}