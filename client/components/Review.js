import React from "react";

export default function Review(props) {

    const review = props.review; //|| 
    const user = props.user || "USER NAME"; // looks like 'user' is meant to be 
    // a string of a user's name - in which case I would call this prop username
    // because user seems to imply it's an object with a lot of user-relevant properties

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