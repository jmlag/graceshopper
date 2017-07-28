import React from 'react';
import { connect } from 'react-redux';
import PackageCard from "./PackageCard";

function PackageList (props) {
  return (
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className = "header center mainColor-text">Packages</h1>
        <div className="row">
          {
            Object.values(props.packages).map(pkg => (
              <PackageCard isLoggedIn={props.isLoggedIn} key={pkg.id} pkg={pkg} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  return {
    packages: state.packages,
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PackageList);
