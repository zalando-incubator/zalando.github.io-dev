import React from 'react';
import FilterTypeahead from './FilterTypeahead.jsx';
import AppConstants from '../../constants/AppConstants.jsx';
import ApiConfig from '../../constants/ApiConfig.js';
import {Col, ButtonToolbar, ButtonGroup, Button, Row} from 'react-bootstrap';

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="text-center">
        <Col md={12}>
          <FilterTypeahead
            onLanguageChange={this.props.onLanguageChange}
            language={this.props.language}
            topLanguages={this.props.topLanguages}
            allLanguages={this.props.allLanguages} />
        </Col>
      </Row>
    )
  }
}

FilterBar.propTypes = {
  allLanguages: React.PropTypes.array.isRequired,
  topLanguages: React.PropTypes.array.isRequired,
  language: React.PropTypes.string.isRequired,
  onLanguageChange: React.PropTypes.func.isRequired
};

export default FilterBar;
