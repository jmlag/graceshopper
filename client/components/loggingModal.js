import React from "react";

export default class LoggingBox extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="form">
        <div className="form-toggle" />
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />Remember Me
                </label>
                <a className="form-recovery" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="form-group">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
        </div>
        <div className="form-panel two">
          <div className="form-header">
            <h1>Register Account</h1>
          </div>
          <div className="form-content">
            <form>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  required="required"
                />
              </div>
              <div className="form-group">
                <button id="submit-text" className = "tertiaryColor-text" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
