import React from 'react';
import { connect } from 'react-redux';

function Review(props) {
    console.log(props.review)
    let rating = 4
    return (
        <div className="row">
        {props.review.map(review => {
            return <div className="col s6">
            <div className="card-panel">
                <div className="review-text">
                    <p>{review.content}</p>
                </div>
                <span className="right" >
                    <i className="material-icons" >{(review.score < 1) ? "star_border" : "star"}</i>
                    <i className="material-icons" >{(review.score < 2) ? "star_border" : "star"}</i>
                    <i className="material-icons" >{(review.score < 3) ? "star_border" : "star"}</i>
                    <i className="material-icons" >{(review.score < 4) ? "star_border" : "star"}</i>
                    <i className="material-icons" >{(review.score < 5) ? "star_border" : "star"}</i>
                </span>
            </div>
        
        </div>

        } )}
        
        </div>
    );
}


const mapToState = (state) => ({ review: state.review }) // review or reviews?


export default connect(mapToState)(Review)
