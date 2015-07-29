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
    let primaryLanguage = this.props.data.primaryLanguage ? this.props.data.primaryLanguage : 'unknown';
    const repoName = (<span> {this.props.data.organizationName} / <b>{this.props.data.name}</b> </span>);
    return (
      <Col xs={12} sm={6} md={4}>
        <a href={RepositoryListItem.buildRepoUrl(this.props.data)} target="_blank" className="repo-item-box">
          <Panel header={repoName} style={colorBar}>
            <p className="repo-item-description">{this.props.data.description}</p>
            <Row className='show-grid text-center'>
              <Col xs={4} md={4}>
                <div className="repo-item-icon">
                  <span className='icon-languages'> </span>
                </div>
                <span className='repo-item-icon-detail repo-item-language'>{primaryLanguage}</span>
              </Col>
              <Col xs={4} md={4}>
                <div className="repo-item-icon">
                  <span className='icon-fork2'> </span>
                </div>
                <span className="repo-item-icon-detail">{this.props.data.forksCount}</span>
              </Col>
              <Col xs={4} md={4}>
                <div className="repo-item-icon">
                  <span className='icon-star2'> </span>
                </div>
                <span className="repo-item-icon-detail">{this.props.data.starsCount}</span>
              </Col>
            </Row>
          </Panel>
        </a>
      </Col>

    );
  }
}

RepositoryListItem.buildRepoUrl = function (data) {
  if (data.url) {
    return data.url;
  }
  return 'https://github.com/' + data.organizationName + '/' + data.name;
};

RepositoryListItem.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default RepositoryListItem;
