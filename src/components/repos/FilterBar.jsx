/**
 * Created by aigreja on 15/07/15.
 */
import React from 'react';
import {Button} from 'react-bootstrap';
import ApiConfig from '../../constants/ApiConfig.js';

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(language) {
    let newLanguage = language;
    //if the user clicks the same button, reset the language filter
    if (language === this.state.language) {
      newLanguage = ApiConfig.REPOS.ALL_LANGUAGE_FILTER;
    }
    this.setState({
      language: newLanguage
    });
    this.props.onUserInput(newLanguage);
  }

  render() {

    let buttons = this.props.languages.map(function (language) {
      let active = this.state.filter === language.name;
      let buttonBarStyle;

      if (active) {
        buttonBarStyle = {
          color: 'white',
          backgroundColor: language.color,
          borderColor: language.color,
          boxShadow: 'none'
        };
      } else {
        buttonBarStyle = {
          color: language.color,
          borderColor: language.color
        };
      }

      return (
        <Button
          key={language.name}
          style={buttonBarStyle}
          onClick={this.onOptionChange.bind(this, language.name)}
          active={active}>{language.name || 'Unknown'}
        </Button>
      );
    }.bind(this));

    buttons.unshift(<Button
        key={'All'}
        onClick={this.onOptionChange.bind(this, ApiConfig.REPOS.ALL_LANGUAGE_FILTER)}
        active={this.state.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER }>All
      </Button>
    );

    return (
      <div className="text-center filter-bar">
        {buttons}
      </div>

    );
  }
}

FilterBar.propTypes = {
  languages: React.PropTypes.array.isRequired,
  language: React.PropTypes.string.isRequired,
  onUserInput: React.PropTypes.func.isRequired
};

export default FilterBar;
