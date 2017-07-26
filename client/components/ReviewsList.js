import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from "./Review";

function ReviewsList (props) {

    const reviews = props.reviews;
    const productId = props.productId;

  return (<div>
      
      <ul>  
    <h4> Reviews list component  </h4>

    {
        reviews.filter( review => review.productId === +productId).map( review => <li> <Review review={review} /> </li> )
    } 

    </ul>


    
    

    </div>); 
}

        /* reviews.filter( review => review.productId === productId ).map( review => (
            <li key={review.id}> <Review review={review} /> </li>
        )) */
    
// const mapStateToProps = function (state, ownProps) {
//   return {
//     reviews: state.reviews
//   };
// };

// const mapDispatchToProps = function (dispatch) {
//   return {};
// };

export default connect(null, null)(ReviewsList);