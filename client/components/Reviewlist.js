import React from 'react';
import { connect } from 'react-redux';

function Review(props) {

    let rating = 4
    return (
        <div className="row">
            {props.review.map(review => {
                return (
                    <div key={review.id} className="col s6">
                        <div className="card-panel">
                            <div className="row">
                                <div className="col s7">
                                    <p>{review.content}</p>
                                </div>
                                <div className="col s5">
                                    <span className="right" >
                                        <i className="material-icons mainColor-text" >{(review.score < 1) ? "star_border" : "star"}</i>
                                        <i className="material-icons mainColor-text" >{(review.score < 2) ? "star_border" : "star"}</i>
                                        <i className="material-icons mainColor-text" >{(review.score < 3) ? "star_border" : "star"}</i>
                                        <i className="material-icons mainColor-text" >{(review.score < 4) ? "star_border" : "star"}</i>
                                        <i className="material-icons mainColor-text" >{(review.score < 5) ? "star_border" : "star"}</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>)
            })}

        </div>
    );
}


const mapToState = (state) => ({ review: state.review })


export default connect(mapToState)(Review)
