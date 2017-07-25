import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import Product from "./Product";

function ProductsList (props) {

  return (<div>  
    Products list component  

    <NavLink to="/packages/1" >
    <Product 
      thumbnail={true} 
      product={{
        name: "prod1",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        price: "123456",
        description: "product 1 description",
      }} 
    />
    </ NavLink>

    <NavLink to="/packages/2" >
    <Product 
      thumbnail={true} 
      product={{
        name: "prod2",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        price: "654321",
        description: "product 2 description",
      }}
    />
    </ NavLink>

    </div>); 

  //const { products } = props;

  // return (
  //   <div>   
  //       {/* searchbar and dropdown filter component  */}
          
  //     <ul>
  //       { 
  //         products
  //         .filter( message => {
  //           //filter parameters
  //         })
  //         .map(message => (
  //           <li key={message.id} >
  //             <NavLink to={/* api route */}> 
  //               {/* product thumbnail component - basically <Product /> without discription and smaller image */}
  //             </ NavLink>
  //           </li>
  //         ))
  //       }
  //     </ul>

  //   </div>
  // );
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