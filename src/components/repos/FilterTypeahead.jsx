import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import SimpleTypeahead from 'react-simple-typeahead';
import ApiConfig from '../../constants/ApiConfig.js';

class FilterTypeahead extends React.Component {

  constructor(props) {
    super(props);
    this.typeahead = {
      customClasses: {
        input: 'filter-bar__typeahead-input',
        list: 'filter-bar__typeahead-results',
        listItem: 'filter-bar__typeahead-item',
        listItemSelected: 'filter-bar__typeahead-item--selected',
        listItemValue: 'filter-bar__typeahead-anchor'
      }
    };
    this.classNames = ['text-center', 'filter-bar', 'filter-bar--typeahead'];
  }

  changeOption(languageName) {
    this.props.onLanguageChange(languageName);
  }

  selectTypeaheadOptionByIndex(index) {
    this.refs.typeahead.setState({selectionIndex: index});
  }

  onOptionChange(languageName) {
    if (!languageName) {
      languageName = ApiConfig.REPOS.ALL_LANGUAGE_FILTER;
    }
    this.changeOption(languageName);
  }

  onInputEmpty() {
    this.changeOption(ApiConfig.REPOS.ALL_LANGUAGE_FILTER);
  }

  render() {
    let typeahead = (
      <SimpleTypeahead
        placeholder="Programming language..."
        defaultValue={this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER ? '' : this.props.language}
        options={this.props.allLanguages.map((language) => language.name)}
        onOptionSelected={this.onOptionChange.bind(this)}
        onInputEmpty={this.onInputEmpty.bind(this)}
        customClasses={this.typeahead.customClasses}>
      </SimpleTypeahead>
    );

    let showing = ( <div className="filter-bar__typeahead__top-languages">
      <strong>top languages </strong>
      {this.props.topLanguages.map((language)=> {
        let linkStyle = { backgroundColor: language.color };
        return (
          <a
            className="filter-bar__typeahead__top-languages__link"
            key={language.name}
            style={linkStyle}
            onClick={this.onOptionChange.bind(this, language.name)}>{language.name || 'Unknown'}
          </a>
        );
      })}
    </div>);

    let resetIcon = (<span
      key={'All'}
      className="octicon octicon-x filter-bar__typeahead__reset-icon"
      onClick={this.onOptionChange.bind(this, ApiConfig.REPOS.ALL_LANGUAGE_FILTER)}>
    </span>);

    let searchIcon = (<span
      key={'Search'}
      className="octicon octicon-search filter-bar__typeahead__search-icon">
    </span>)

    return (
      <div className={this.classNames.join(' ')}>
        {this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER ? searchIcon : resetIcon}
        {typeahead}
        {showing}
      </div>
    );
  }
}

FilterTypeahead.propTypes = {
  allLanguages: React.PropTypes.array.isRequired,
  language: React.PropTypes.string.isRequired,
  onLanguageChange: React.PropTypes.func.isRequired
};

export default FilterTypeahead;
