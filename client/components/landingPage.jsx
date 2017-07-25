import React from "react"
import { connect } from 'react-redux'

const LandingPage = () => {
  return (
    <body>
      <div className = "section no-pad-bot">
        <div className = "container">
          <h1 className = "header center">NetEscape</h1>
          <div className = "row center">
            <h5 className = "header light col s12">
              Voted best ISP in 2020. NetEscape is your premiere multi-tiered ISP.
            </h5>
          </div>
        </div>
      </div>
    </body>
  )
}

export default connect()(LandingPage)
