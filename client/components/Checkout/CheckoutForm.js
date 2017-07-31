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

    return (
      <form >        
        <Row>
          <Input s={3} label="First Name" />
          <Input s={3} label="Last Name" />
          <Input s={3} type="email" label="Email"  />
          <Input s={3} label="Phone #"  />
          <PlacesAutocomplete
            inputProps={inputProps}
            onSelect={this.handleSelect} 
            highlightFirstSuggestion={true}
          />
          {
            this.state.selected ? (<div>
              <Input s={1} label="Street #" value={this.state.street_number}/>
              <Input s={11} label="Address" value={this.state.route} />
              <Input s={12} label="Address 2" />
              <Input s={4} label="City" value={this.state.locality} />
              <Input s={3} label="State/Province" value={this.state.administrative_area_level_1} />
              <Input s={3} label="Country" value={this.state.country} />
              <Input s={2} label="Zip/Postal Code" value={this.state.postal_code} />
            </div>) : ""
          }
        </Row>
      </form>
    )
  }
}

export default CheckoutForm;