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
          {this.props.data.description}
          <p>{this.props.data.primaryLanguage}</p>
          <Row className='show-grid text-center'>
            <Col xs={6} md={6}>
              {this.props.data.forksCount}
              <span class="icon-fork"></span>
            </Col>
            <Col xs={6} md={6}> {this.props.data.starsCount}</Col>
          </Row>
        </Panel>
      </Col>

    );
  }
}

export default RepositoryListItem;
