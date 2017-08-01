import React from 'react'
import { connect } from 'react-redux'

function CheckoutForm(props){
  return (
    <form onSubmit={props.sendCheckout}>
      <div className="row">
        <div className="input-field col s12 m6">
          <input id="firstName" type="text" className="validate" />
          <label>First Name</label>
        </div>
        <div className="input-field col s12 m6">
          <input id="lastName" type="text" className="validate" />
          <label>Last Name</label>
        </div>
        <div className="input-field col s12 m6">
          <input defaultValue={props.user.email} id="email" type="email" className="validate" />
          <label className="active">Email</label>
        </div>
        <div className="input-field col s12 m6">
          <input id="phone" type="tel" className="validate" />
          <label>Phone #</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s4 m2">
          <input id="street" type="number" className="validate" />
          <label>Street #</label>
        </div>
        <div className="input-field col s8 m4">
          <input id="address" type="text" className="validate" />
          <label>Address</label>
        </div>
        <div className="input-field col s12 m6">
          <input id="address2" type="text" className="validate" />
          <label>Address 2</label>
        </div>
        <div className="input-field col s12 m6">
          <input id="city" type="text" className="validate" />
          <label>City</label>
        </div>
        <div className="input-field col s12 m6">
          <input id="state" type="text" className="validate" />
          <label>State/Providence</label>
        </div>
        <div className="input-field col s12 m6">
          <input id="country" type="text" className="validate" />
          <label>Country</label>
        </div>
        <div className="input-field col s12 m6">
          <input id="zip" type="number" className="validate" />
          <label>Zip Code</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12 right-align">
          <button type="submit" className="btn mainColor">Submit<i className="material-icons right">send</i></button>
        </div>
      </div>
    </form>
  )
}

function mapStoreToProps(store){ //state - terminology is important
  return {
    user: store.user,
  }
}

function mapDispatchToProps(dispatch){
  return {
    sendCheckout(evt){
      evt.preventDefault()
      const order = {
        firstName: evt.target.firstName.value,
        lastName: evt.target.lastName.value,
        email: evt.target.email.value,
        phone: evt.target.phone.value,
        street: evt.target.street.value,
        address: evt.target.address.value,
        address2: evt.target.address2.value,
        city: evt.target.city.value,
        state: evt.target.state.value,
        country: evt.target.country.value,
        zip: evt.target.zip.value,
      }
    }
  }
}


export default connect(mapStoreToProps, mapDispatchToProps)(CheckoutForm);
