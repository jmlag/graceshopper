import Autosuggest from 'react-autosuggest'
import React from 'react'
import PackageCard from './PackageCard'

const getSuggestions = (value, array) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : array.filter(pkg =>
    pkg.name.toLowerCase().slice(0, inputLength) === inputValue
  ).map(pkg => pkg.name);
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);    
    
    this.packages = Object.values(props.packages)

    this.state = {
      value: '',
      suggestions: this.packages.map(pkg => pkg.name),
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onBlur = (event, { highlightedSuggestion }) => {
    this.setState({
      value: highlightedSuggestion
    });
  }

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
      onBlur: this.onBlur
    };

    return (<div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      {
        Object.values(this.props.packages)
         .filter(pkg => {
          return !this.state.value || this.state.suggestions.includes(pkg.name);
        }) 
        .map(pkg => (
              <PackageCard isLoggedIn={this.props.isLoggedIn} key={pkg.id} pkg={pkg} />
            ))
      }
    </div>);
  }
}