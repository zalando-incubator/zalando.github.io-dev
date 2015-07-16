/**
 * Created by aigreja on 15/07/15.
 */

import React from 'react';
import {Panel, Col, Row} from 'react-bootstrap';

class RepositoryListItem extends React.Component {

  render() {
    return (
      <Col xs={12} sm={6} md={4}>
        <Panel header={this.props.data.name}>
          <p>{this.props.data.description}</p>
          <Row className='show-grid text-center'>
            <Col xs={4} md={4}>
              <i className='fa fa-code'></i>
              &nbsp;
              {this.props.data.primaryLanguage}
            </Col>
            <Col xs={4} md={4}>
              <i className='fa fa-code-fork'></i>
              &nbsp;
              {this.props.data.forksCount}
            </Col>
            <Col xs={4} md={4}>
              <i className='fa fa-star'></i>
              &nbsp;
              {this.props.data.starsCount}
            </Col>
          </Row>
        </Panel>
      </Col>

    );
  }
}

export default RepositoryListItem;
