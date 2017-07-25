import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from "./Review";

function ReviewsList (props) {

    const { reviews } = props;
    const productId = props.match.params.productId;

  return (<ul>  
    <li> Reviews list component  </li>

    {
        reviews.filter( review => review.productId === productId ).map( review => (
            <li key={review.id}> <Review review={review} /> </li>
        ))
    }
    

    </ul>); 
}

// const mapStateToProps = function (state, ownProps) {
//   return {
//     reviews: state.reviews
//   };
// };

// const mapDispatchToProps = function (dispatch) {
//   return {};
// };

export default connect(null, null)(ReviewsList);