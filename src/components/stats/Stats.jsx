import React from 'react';
import Stat from './Stat.jsx';
import SectionHeading from '../section-heading/SectionHeading.jsx';
import {Col, Row} from 'react-bootstrap';
import api from '../../utils/Api.js';

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
      <div className='container section'>
        <SectionHeading text="statistics" />
        <Row className='show-grid text-center'>
          <Col xs={6} sm={4} >
            <Stat name='REPOS' count={this.state.repos} icon='icon-repos'/>
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
            <Stat name='CONTRIBUTORS' count={this.state.contributors} icon='icon-contributor'/>
          </Col>
          <Col xs={6} sm={4}>
            <Stat name='MEMBERS' count={this.state.members} icon='icon-members'/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Stats;
