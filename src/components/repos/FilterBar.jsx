import React from 'react';
import FilterTypeahead from './FilterTypeahead.jsx';
import FilterButtons from './FilterButtons.jsx';
import AppConstants from '../../constants/AppConstants.jsx';
import ApiConfig from '../../constants/ApiConfig.js';
import {Col, ButtonToolbar, ButtonGroup, Button, Row} from 'react-bootstrap';

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { filterType: AppConstants.FILTER_TYPES.DEFAULT };
  }

  changeFilter(filterType) {
    this.setState({filterType: filterType});
    this.props.onLanguageChange(ApiConfig.REPOS.ALL_LANGUAGE_FILTER);
  }

  onFilterChange(filterType) {
    this.changeFilter(filterType);
  }

  render() {
    let onTopLanguages = this.onFilterChange.bind(this, AppConstants.FILTER_TYPES.BUTTONS);
    let onSearch = this.onFilterChange.bind(this, AppConstants.FILTER_TYPES.TYPEAHEAD);
    let isTypeahead = this.state.filterType === AppConstants.FILTER_TYPES.TYPEAHEAD;
    let filter = isTypeahead ? this.getTypeaheadFilter() : this.getButtonsFilter();
    return (
      <Row className="text-center">
          <ButtonGroup className="filter-menu">
            <Button onClick={onTopLanguages} active={!isTypeahead}>Top languages</Button>
            <Button onClick={onSearch}  active={isTypeahead}>Search</Button>
          </ButtonGroup>
        {filter}
      </Row>
    )
  }

  getButtonsFilter() {
    return (<div>
      <FilterButtons language={this.props.language}
                     languages={this.props.languages}
                     onLanguageChange={this.props.onLanguageChange} />
      </div>);
  }

  getTypeaheadFilter() {
      return (
        <FilterTypeahead onLanguageChange={this.props.onLanguageChange}
                         language={this.props.language}
                         allLanguages={this.props.allLanguages} />
      );
  }
}

FilterBar.propTypes = {
  allLanguages: React.PropTypes.array.isRequired,
  languages: React.PropTypes.array.isRequired,
  language: React.PropTypes.string.isRequired,
  onLanguageChange: React.PropTypes.func.isRequired
};

export default FilterBar;
