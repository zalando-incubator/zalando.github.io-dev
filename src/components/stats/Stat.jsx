import React from 'react';
import NumberFormatter from '../../utils/NumberFormatter.js';
import {Col, Row} from 'react-bootstrap';

class Stat extends React.Component {

  render() {
    return (
      <Row className='stat'>
        <Col xs={8}>
          <div className="stat-label">
            <span className={'stat-label-icon ' + this.props.icon}></span><span className="stat-label-text">{this.props.name}</span>
          </div>
        </Col>
        <Col xs={4}>
          <div className="stat-count">
            {NumberFormatter.format(this.props.count)}
          </div>
        </Col>
      </Row>
    );
  }
}

Stat.propTypes = {
  icon: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Stat;
