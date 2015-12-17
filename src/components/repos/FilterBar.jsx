import React from 'react';
import {Button} from 'react-bootstrap';
import {Typeahead} from 'react-typeahead';
import ApiConfig from '../../constants/ApiConfig.js';
//import log from '../../utils/log.js';

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.onOptionChange = this.onOptionChange.bind(this);
    this.typeahead = {
      customClasses: {
        input: 'filter-bar__typeahead-input',
        results: 'filter-bar__typeahead-results',
        listItem: 'filter-bar__typeahead-item',
        listAnchor: 'filter-bar__typeahead-anchor'
      }
    };
    this.classNames = ['text-center', 'filter-bar'];
    if (this.isTypeahead()) {
      this.classNames.push('filter-bar--typeahead');
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language) {
      if (this.isTypeahead() && this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER) {
        this.refs.typeahead.setEntryText('');
      }
    }
  }

  isTypeahead() {
    return this.props.filterVariant === 'typeahead';
  }

  onOptionChange(languageName) {
    this.props.onLanguageChange(languageName);
  }

  render() {
    let typeahead = this.isTypeahead() ? (
      <Typeahead
        ref="typeahead"
        value={this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER ? '' : this.props.language}
        options={this.props.allLanguages.map((language) => language.name)}
        placeholder="Programming language..."
        onOptionSelected={this.onOptionChange.bind(this)}
        customClasses={this.typeahead.customClasses}
        maxVisible={4}
        />
    ) : '';

    let showing = this.isTypeahead() ? ( <div style={{textAlign: 'left', marginTop: '4px'}}>
      ... showing <strong>{this.props.language}</strong> repositories
    </div>) : '';

    let buttons = [<Button
      key={'All'}
      className="filter-bar__btn-all"
      onClick={this.onOptionChange.bind(this, ApiConfig.REPOS.ALL_LANGUAGE_FILTER)}
      active={this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER }>All
    </Button>
    ];

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

    if (!this.isTypeahead()) {
      buttons = buttons.concat(topLanguagesButtons);
    }

    return (
      <div className={this.classNames.join(' ')}>
        {buttons}
        {typeahead}
        {showing}
      </div>
    );
  }
}

FilterBar.propTypes = {
  filterVariant: React.PropTypes.string.isRequired,
  allLanguages: React.PropTypes.array.isRequired,
  languages: React.PropTypes.array.isRequired,
  language: React.PropTypes.string.isRequired,
  onLanguageChange: React.PropTypes.func.isRequired
};

export default FilterBar;
