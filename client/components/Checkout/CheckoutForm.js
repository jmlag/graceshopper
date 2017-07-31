import React from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import { Row, Input } from 'react-materialize'

const componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      selected: false,
      street_number: '',
      route: '',
      locality: '',
      administrative_area_level_1: '',
      country: '',
      postal_code:'',
     }
    this.onChange = (address) => {  this.setState({ address }); }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (event) => {
    Promise.resolve(this.onChange(event))
    .then(this.setState({selected: true}))
    .then(() => geocodeByAddress(this.state.address))
    .then(result => result[0].address_components)
    .then(addressComponents => addressComponents.forEach(component => {
      const componentType = component.types[0];
      if (componentForm[componentType]) {
        const newState = Object.assign({}, this.state)
        newState[componentType] = component[componentForm[componentType]];
        this.setState(newState);
      }
    }))
    .catch(console.error);
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: "Enter your address",
    }

    const styles = {
      autocompleteItemActive: { backgroundColor: 'cyan' }
    }

    return (
      <div className="container">
        <form>
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
              <input id="email" type="email" className="validate" />
              <label>Email</label>
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
        </form>
      </div>
    )
  }
}

export default CheckoutForm;
