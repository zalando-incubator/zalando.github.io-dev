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
    this.changeOption(languageName);
  }


  render() {
    let typeahead = (
      <SimpleTypeahead
        placeholder="Programming language..."
        defaultValue={this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER ? '' : this.props.language}
        options={this.props.allLanguages.map((language) => language.name)}
        onOptionSelected={this.onOptionChange.bind(this)}
        customClasses={this.typeahead.customClasses}>
      </SimpleTypeahead>
    );

    let showing = ( <div style={{textAlign: 'left', marginTop: '4px'}}>
      ... showing <strong>{this.props.language}</strong> repositories
    </div>);

    let showAllButton = (<Button
      key={'All'}
      className="filter-bar__btn-all"
      onClick={this.onOptionChange.bind(this, ApiConfig.REPOS.ALL_LANGUAGE_FILTER)}
      active={this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER }>Show all
    </Button>);

    return (
      <div className={this.classNames.join(' ')}>
        {this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER ? '' : showAllButton}
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
