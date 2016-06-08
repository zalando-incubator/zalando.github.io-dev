import React from 'react';
import Stat from './Stat.jsx';
import SectionHeading from '../section-heading/SectionHeading.jsx';
import {Col, Row} from 'react-bootstrap';
import api from '../../utils/Api.js';
import API_CONFIG from '../../constants/ApiConfig.js';

let organizationNames = API_CONFIG.ORGANIZATIONS.split(',');

let organizationLinks = function (genitive) {
  return organizationNames.map(function (name, i) {
    let href = `https://github.com/${name}`;
    return (
      <span key={'span_' + href}>
        <a key={href} href={href} target="_blank">{name + (genitive ? '\'s' : '')}</a>
        {(i !== organizationNames.length - 1) ? ', ' : ''}
      </span>
    );
  });
};

let organizationsWord = function () {
  return (<span>organization{organizationNames.length > 1 ? 's' : ''}</span>);
}();

let membersDescription = function () {
  return (<span>number of folks that belong to {organizationLinks()} {organizationsWord}</span>);
}();

let contributorsDescription = function () {
  return (<span>number of folks that contribute to {organizationLinks(true)} repositories</span>);
}();

class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: 0,
      stars: 0,
      forks: 0,
      languages: 0,
      contributors: 0,
      members: 0
    };
  }

  componentDidMount() {
    // get the stats
    api.getStats().then(function (stats){
      if (stats) {
        this.setState(stats);
      }
    }.bind(this));
  }

  render() {
    return (
      <div className="stats-container">
        <Row className="stats-container-main-row">
          <Col xs={12} sm={6} md={8} className="stats-container-main-cols">
            <div className="stats-claim-container">
              <h1>Open Source</h1>
              <h2>AT ZALANDO</h2>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="stats-container-main-cols">
            <Row className="stats-labels-main-row">
              <Col xs={12}>
                <Stat name='Contributors' count={this.state.contributors} icon='mega-octicon octicon-organization'/>
              </Col>
              <Col xs={12}>
                <Stat name='Stars' count={this.state.stars} icon='mega-octicon octicon-star'/>
              </Col>
              <Col xs={12}>
                <Stat name='Repositories' count={this.state.repos} icon='mega-octicon octicon-repo'/>
              </Col>
              <Col xs={12}>
                <Stat name='Languages' count={this.state.languages} icon='mega-octicon octicon-code'/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Stats;
