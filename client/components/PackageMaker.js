//DO NOT USE
//INCOMPLETE - NEEDS MODIFICATION
// custom package maker, see https://ting.com/rates for example
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter, NavLink } from "react-router-dom";

/**
 * COMPONENT
 */
const PackageMaker = (props) => {

  return (
    <table>
      <thead> 
        <tr>  
          {/* column headers here */}
        </tr>
      </thead>
      <tbody> 
        {/* map over package components (ex. speed, amuont of monthly data, addons) */}
          {/* map over options for each package component (ex. 1Mbps, 10 Mbps, 50 Mbps, etc.) */}
      </tbody>
    </table>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    packages: state.packages,
  }
}

const mapDispatch = (dispatchEvent) => {
  return {};
}

export default connect(mapState)(mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
