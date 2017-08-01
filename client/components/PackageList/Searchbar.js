import Autosuggest from 'react-autosuggest' // this package should be saved in dependencies
import React from 'react'
import PackageCard from './PackageCard'

const getSuggestions = (value, array) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : array.filter(pkg =>
    pkg.name.toLowerCase().slice(0, inputLength) === inputValue
  ).map(pkg => pkg.name);
};

const getSuggestionValue = suggestion => suggestion; //?

const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    
    this.packages = Object.values(props.packages) // what is this for?
    // also, pretty this only runs once and does not update if props update

    this.state = {
      value: '',
      suggestions: this.packages.map(pkg => pkg.name),
    };
  }

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.setState({
      value: suggestion
    })
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.packages)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search for a package',
      value,
      onChange: this.onChange,
      onBlur: this.onChange
    };

    return (<div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      {
        Object.values(this.props.packages)
         .filter(pkg => {
          return !this.state.value || this.state.suggestions.includes(pkg.name) || this.state.value === pkg.name;
        }) 
        .map(pkg => (
              <PackageCard isLoggedIn={this.props.isLoggedIn} key={pkg.id} pkg={pkg} />
            ))
      }
    </div>);
  }
}