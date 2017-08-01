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
    this.toggleBtn = this.toggleBtn.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
    this.registerHandler = this.registerHandler.bind(this)
  }

  panelClickHandle(e) {
    e.preventDefault();
      this.setState({ toggle: false });
  }

  toggleBtn(e){
    e.preventDefault()
    this.setState({toggle:true})
  }
  loginHandler(e){
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    this.props.auth(email, password, 'login')
  }

  registerHandler(e){
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    this.props.auth(email, password, 'signup')
  }

  render() {

    const {error} = this.props;

    return (
      <div>
      <div className="form">
        <div
          className={"tertiaryColor-text form-toggle " + (this.state.toggle ? "" : "visible")}
          onClick={e => this.toggleBtn(e)}
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
              <a href="/auth/google"><img className="login-img" src="/images/google-login.png"/></a>
                 {error && error.response && <div> {error.response.data} </div>}
            </form>
          </div>
        </div>

        <div
          onClick={(this.state.toggle ? (e) => this.panelClickHandle(e): '')}
          className={
            "form-panel two " + (this.state.toggle ? "hidden" : "active")
          }
        >
          <div className="form-header">
            <h1>Register Account</h1>
          </div>
          <div className="form-content">
            <form onSubmit={(e) => this.registerHandler(e)}>
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
              {error && error.response && <div> {error.response.data} </div>}
            </form>
          </div>
        </div>
      </div>
      <div className={"register center " + (this.state.toggle && "visible")}>
        <div className="right-align tertiaryColor-text">
          REGISTER&nbsp;&nbsp;<i className="material-icons">call_made</i>&nbsp;&nbsp;
        </div>
      </div>
      </div>
    );
  }
}


const mapLogin = (state) => {
  return {
    error: state.user.error
  }
}

const mapDispatchToProps = {auth}

export default connect(mapLogin, mapDispatchToProps)(LoggingBox)
