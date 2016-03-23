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
    this.setState(api.getStats());
  }

  render() {
    return (
      <div className='container section'>
        <SectionHeading text="statistics" />
        <Row className='show-grid text-center'>
          <Col xs={6} sm={4} >
            <Stat name='REPOSITORIES' count={this.state.repos} icon='icon-repos'/>
          </Col>
          <Col xs={6} sm={4}>
            <Stat name='STARS' count={this.state.stars} icon='icon-star2'/>
          </Col>
          <Col xs={6} sm={4}>
            <Stat name='FORKS' count={this.state.forks} icon='icon-fork2'/>
          </Col>
          <Col xs={6} sm={4}>
            <Stat name='LANGUAGES' count={this.state.languages} icon='icon-languages'/>
          </Col>
          <Col xs={6} sm={4}>
            <Stat name='CONTRIBUTORS' description={contributorsDescription} count={this.state.contributors} icon='icon-contributor'/>
          </Col>
          <Col xs={6} sm={4}>
            <Stat name='MEMBERS' description={membersDescription} count={this.state.members} icon='icon-members'/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Stats;
