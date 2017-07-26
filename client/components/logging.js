import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { auth } from '../store'

class LoggingBox extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    };
    this.panelClickHandle = this.panelClickHandle.bind(this);
    this.loginHandler = this.loginHandler.bind(this)
  }

  panelClickHandle(e) {
    e.preventDefault();
    if (this.state.toggle === true) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  }

  loginHandler(e){
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    this.props.auth(email, password, 'login')
  }

  render() {
    return (
      <div className="form">
        <div
          className={"form-toggle " + (this.state.toggle ? "" : "visible")}
          onClick={e => this.panelClickHandle(e)}
        />

        <div
          className={"form-panel one " + (this.state.toggle ? "" : "hidden")}
        >
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form onSubmit={(e) => this.loginHandler(e)}>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
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

        <div
          onClick={e => this.panelClickHandle(e)}
          className={
            "form-panel two " + (this.state.toggle ? "hidden" : "active")
          }
        >
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
                <button
                  id="submit-text"
                  className="tertiaryColor-text"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = null;
const mapDispatchToProps = {auth}

export default connect(mapStateToProps, mapDispatchToProps)(LoggingBox)
