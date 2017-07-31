import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from './Review';
import { postReview } from '../store'

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
        starToggle: 0
    }
    this.starHandler = this.starHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler(e){
<<<<<<< HEAD:client/components/ReviewBox.js
      e.preventDefault()
      console.log(e.target.comment.value)
      const content = e.target.comment.value;
      this.props.postReview({
        score:this.state.starToggle,
        content: content,
        packageId:1
      })
=======
    e.preventdefault()
>>>>>>> master:client/components/ReviewsList.js
  }

  starHandler(e){
    e.preventDefault()
    let rating = +e.target.attributes[0].nodeValue
    this.setState({starToggle: rating})
  }

  render() {
    return (
      <div className="col s6">
        <div className="row" id="post-review-box">
          <div className="col s6">
          <div className="card-panel">
            <form onSubmit={e => this.onSubmitHandler(e)}>
              <input id="ratings-hidden" name="rating" type="hidden" />
              <textarea
                className="form-control"
                cols="50"
                id="new-review"
                name="comment"
                placeholder="Enter your review here..."
                rows="5"
              />

              <div className="text-right inline">
                <button className="btn" type="submit">
                  Submit
                </button>
                <span className="right" >
                    <i value={1} className="material-icons" onClick={(e) => this.starHandler(e)} >{(this.state.starToggle < 1) ? "star_border" : "star"}</i>
                    <i value={2} className="material-icons" onClick={e => this.starHandler(e)}>{(this.state.starToggle < 2) ? "star_border" : "star"}</i>
                    <i value={3} className="material-icons" onClick={e => this.starHandler(e)}>{(this.state.starToggle < 3) ? "star_border" : "star"}</i>
                    <i value={4} className="material-icons" onClick={e => this.starHandler(e)}>{(this.state.starToggle < 4) ? "star_border" : "star"}</i>
                    <i value={5} className="material-icons" onClick={e => this.starHandler(e)}>{(this.state.starToggle < 5) ? "star_border" : "star"}</i>
                </span>

              </div>
            </form>

          </div>
          </div>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD:client/components/ReviewBox.js

const mapToState = null;
const mapDispatch = {postReview};

export default connect(mapToState, mapDispatch)(Reviews);
=======
export default Reviews;
>>>>>>> master:client/components/ReviewsList.js
