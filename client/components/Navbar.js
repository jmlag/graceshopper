import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar (props) {
  console.log(props.loggedIn)
  return (
    <nav className = 'secondaryColor' role = "navigation">
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
