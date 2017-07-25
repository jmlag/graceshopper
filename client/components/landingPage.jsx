import React from "react"
import { connect } from 'react-redux'

const LandingPage = () => {
  return (
    <body>
      <div className = "section no-pad-bot">
        <div className = "container">
          <h1 className = "header center blue-text">NetEscape</h1>
          <div className = "row center">
            <h5 className = "header light col s12">
              Voted best ISP in 2020. NetEscape is your premiere multi-tiered ISP.
            </h5>
          </div>
          <div className = "row center">
            <button className = "btn-large waves-effect waves-light orange">Get Started</button>
          </div>

          <div className ="row">
            <div className ="col s12 m4">
              <div className ="icon-block">
                <h2 className ="center light-blue-text"><i className ="material-icons">flash_on</i></h2>
                <h5 className ="center">Speeds up development</h5>

                <p className ="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
              </div>
            </div>

            <div className ="col s12 m4">
              <div className ="icon-block">
                <h2 className ="center light-blue-text"><i className ="material-icons">group</i></h2>
                <h5 className ="center">User Experience Focused</h5>

                <p className ="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
              </div>
            </div>

            <div className ="col s12 m4">
              <div className ="icon-block">
                <h2 className ="center light-blue-text"><i className ="material-icons">settings</i></h2>
                <h5 className ="center">Easy to work with</h5>

                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default connect()(LandingPage)
