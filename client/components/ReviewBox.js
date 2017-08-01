// (e) => somehandlerfunc(e) is equivalen to just passing in somehandlerfunc

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from './Reviewlist';
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
      e.preventDefault()
      const content = e.target.comment.value;
      this.props.postReview({
        score:this.state.starToggle,
        content: content,
        packageId:this.props.packageId
      })
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
                  {/* these stars seem awfully repetitve and reuseable... COMPONENT?
                    e.g. <ReviewStar value={valueNum} starHandler={starHandler} /> */}
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


const mapToState = null;
const mapDispatch = {postReview};

export default connect(mapToState, mapDispatch)(Reviews);
