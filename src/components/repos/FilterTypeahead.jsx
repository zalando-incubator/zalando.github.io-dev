import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {Typeahead} from 'react-typeahead';
import ApiConfig from '../../constants/ApiConfig.js';

class FilterTypeahead extends React.Component {

  constructor(props) {
    super(props);
    this.typeahead = {
      customClasses: {
        input: 'filter-bar__typeahead-input',
        results: 'filter-bar__typeahead-results',
        listItem: 'filter-bar__typeahead-item',
        listAnchor: 'filter-bar__typeahead-anchor'
      }
    };
    this.classNames = ['text-center', 'filter-bar', 'filter-bar--typeahead'];
  }

  componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language) {
      if (this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER) {
        this.refs.typeahead.setEntryText('');
      }
    }
  }

  changeOption(languageName) {
    this.props.onLanguageChange(languageName);
  }

  selectTypeaheadOptionByIndex(index) {
    this.refs.typeahead.setState({selectionIndex: index});
  }

  onKeyUp(event) {
    let input = event.currentTarget;
    if (input.value.length === 0) {
      this.changeOption(ApiConfig.REPOS.ALL_LANGUAGE_FILTER);
    }
  }

  onOptionChange(languageName, event) {
    let input = event.target;
    this.changeOption(languageName);
    input.blur();

  }

  onFocus(event) {
    let input = event.currentTarget;
    input.setSelectionRange(0, input.value.length);
    this.selectTypeaheadOptionByIndex(0);
  }

  render() {
    let typeahead = (
      <Typeahead
        ref="typeahead"
        value={this.props.language === ApiConfig.REPOS.ALL_LANGUAGE_FILTER ? '' : this.props.language}
        options={this.props.allLanguages.map((language) => language.name)}
        placeholder="Programming language..."
        onFocus={this.onFocus.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
        onOptionSelected={this.onOptionChange.bind(this)}
        customClasses={this.typeahead.customClasses}
        maxVisible={4}
      />
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
