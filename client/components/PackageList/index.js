import React from 'react';
import { connect } from 'react-redux';
import Searchbar from './Searchbar'

function PackageList (props) {
  return (
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className = "header center mainColor-text">Packages</h1>
        <div className="row">
          {Object.keys(props.packages).length ? (<Searchbar packages={props.packages} isLoggedIn={props.isLoggedIn}/>) : ''}
          {/* using && is a great option if there is no else case */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    packages: state.packages,
    isLoggedIn: !!state.user.id,
  };
};

export default connect(mapStateToProps)(PackageList);
