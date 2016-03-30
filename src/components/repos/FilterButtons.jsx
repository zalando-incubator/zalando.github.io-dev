import React from 'react';
import {Button} from 'react-bootstrap';

class FilterButtons extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = ['text-center', 'filter-bar'];
  }

  onOptionChange(languageName) {
    this.props.onLanguageChange(languageName);
  }

  render() {
    let topLanguagesButtons = this.props.languages.map(function (language) {

      let active = this.props.language === language.name;
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

    return (
      <div className={this.classNames.join(' ')}>
        {topLanguagesButtons}
      </div>
    );
  }
}


FilterButtons.propTypes = {
  languages: React.PropTypes.array.isRequired,
  language: React.PropTypes.string.isRequired,
  onLanguageChange: React.PropTypes.func.isRequired
};

export default FilterButtons;
