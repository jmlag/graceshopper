import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* another general note about consistency - some of these components are
`export default`ed while others are first defined with const, then exported
really being nit-picky now but once again - consistency! */
export default function Navbar (props) {
  console.log(props.loggedIn) // clean up console logs when you're done with them
  // it is generally discouraged to leave these around - esp one like this without even a label
  return (
    <nav className = 'secondaryColor' role = "navigation"> {/* quotations inconsistent */}
      <div className = "nav-wrapper container">
        <Link to = '/' className = "brand-logo left">NetEscape</Link>
        <ul className = "right">
          {
            !props.loggedIn ? (
              <li><Link to = "/login">Login</Link></li>
            ) : (
              <li><Link to = "/logout">Logout</Link></li>
            )
          }
          <li><Link to = '/packages'>Packages</Link></li>
          <li><Link to = "/cart">Cart</Link></li>
          {/* <li><a>Sign Out</a></li> */}
        </ul>
      </div>
    </nav>
  )
}

// export default connect()(Navbar)
