import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function ProductsList (props) {

  const { products } = props;

  return (
    <div>   
      {/* searchbar and dropdown filter component    */}
      <ul>
        { 
          messages
          .filter( message => {
            //filter parameters
          })
          .map(message => (
            <li key={message.id} >
              <NavLink to={/* api route */}> 
                {/* product thumbnail component - basically <Product /> without discription and smaller image */}
              </ NavLink>
            <li>
          )) 
        }
      </ul>
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {

  return {
    products: state.products
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);