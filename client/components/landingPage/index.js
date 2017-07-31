import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import NetNeutrality from './NetNeutrality'

const LandingPage = () => {
  return (
    <div className = "section no-pad-bot">
      <div className = "container">
        <br /><br />
        <h1 className = "header center mainColor-text">NetEscape</h1>
        <div className = "row center">
          <h5 className = "header light col s12">
            Voted best ISP in 2020. NetEscape is your premiere multi-tiered ISP.
          </h5>
        </div>
        <br /><br />
        <div className = "row center">
          <Link to = "/packages">
            <button className = "btn-large waves-effect tertiaryColor">Get Started</button>
          </Link>
        </div>
        <br /><br />
        <div className ="row">
          <div className ="col s12 m4">
            <div className ="icon-block">
              <h2 className ="center mainColor-text"><i className ="material-icons">flash_on</i></h2>
              <h5 className ="center">Just What You Need</h5>

              <p className ="light">No two people are the same, and no two people's browsing habits are the same either. Pay for only the parts of the internet that <i>you</i> use.</p>
            </div>
          </div>
          <div className ="col s12 m4">
            <div className ="icon-block">
              <h2 className ="center mainColor-text"><i className ="material-icons">group</i></h2>
              <h5 className ="center">Experienced Technicians</h5>

              <p className ="light">By employing the finest professionals, NetEscape offers customers lightning fast installation by certified technicians. Lightning installations for blazing* fast internet speeds. <br /><i>* depending on the package.</i></p>
            </div>
          </div>

          <div className ="col s12 m4">
            <div className ="icon-block">
              <h2 className ="center mainColor-text"><i className ="material-icons">settings</i></h2>
              <h5 className ="center">Manage Online</h5>

              <p className="light">Never have to call a person again. Utilizing our web-client, feel free to manage your account, purchase, and check orders straight from any desktop or mobile device.</p>
            </div>
          </div>
        </div>
      </div>
      <NetNeutrality />
    </div>
  )
}

export default connect()(LandingPage)
