/**
 * Created by aigreja on 15/07/15.
 */

import React from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
import languagesUtils from '../../utils/LanguagesUtil.js';

class RepositoryListItem extends React.Component {
  render() {
    let colorBar = {
      borderLeft: '3px solid ' + ( languagesUtils.getLanguageColor(this.props.data.primaryLanguage) )
    };
    return (
      <Col xs={12} sm={6} md={4}>
        <a href={this.props.data.url}>
          <Panel header={this.props.data.name} style={colorBar}>
            <p>{this.props.data.description}</p>
            <Row className='show-grid text-center'>
              <Col xs={4} md={4}>
                <i className='fa fa-code'></i>
                &nbsp;
                <span className='language'>{this.props.data.primaryLanguage}</span>
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
        </a>
      </Col>

    );
  }
}

export default RepositoryListItem;
