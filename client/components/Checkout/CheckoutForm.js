import React from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

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
    this.state = { address: "" }
    this.onChange = (address) => {  this.setState({ address }); }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (event) => {
    Promise.resolve(this.onChange(event))
    .then(() => geocodeByAddress(this.state.address))
    .then(result => result[0].address_components)
    .then(addressComponents => addressComponents.forEach(component => {
      const componentType = component.types[0];
      if (componentForm[componentType]) {
        console.log(component[componentForm[componentType]], componentType)
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
        <PlacesAutocomplete
          inputProps={inputProps}
          onSelect={this.handleSelect} 
          highlightFirstSuggestion={true}
        />
      </form>
    )
  }
}

export default CheckoutForm;