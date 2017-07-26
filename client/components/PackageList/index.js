import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import Package from "./Package";

function PackageList (props) {

  return (
  <div>
    Packages list component
    {
      props.packages.map(pkg => <Package pkg = {pkg} />)
    }
    <NavLink to="/packages/1" >
    <Package
      thumbnail={true}
      product={{
        name: "prod1",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        price: "123456",
        description: "product 1 description",
      }}
    />
    </NavLink>

    <NavLink to="/packages/2" >
    <Package
      thumbnail={true}
      product={{
        name: "prod2",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        price: "654321",
        description: "product 2 description",
      }}
    />
    </NavLink>

    </div>);
}

const mapStateToProps = function (state, ownProps) {
  return {
    packages: state.packages,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageList);
