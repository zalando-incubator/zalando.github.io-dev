/**
 * Created by aigreja on 15/07/15.
 */

import React from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
import languagesUtils from '../../utils/LanguagesUtil.js';
import NumberFormatter from '../../utils/NumberFormatter.js';

class RepositoryListItem extends React.Component {

  render() {
    const {primaryLanguage, name, title, organizationName, description, forksCount, starsCount, contributorsCount} = this.props.data,
      colorBar = {
        borderLeft: '3px solid ' + ( languagesUtils.getLanguageColor(this.props.data.primaryLanguage) ),
        borderTop: '3px solid ' + ( languagesUtils.getLanguageColor(this.props.data.primaryLanguage) )
      };
    return (
      <Col xs={12} sm={6} md={4}>
        <a href={RepositoryListItem.buildRepoUrl(this.props.data)} target="_blank" className="repo-item-box">
          <Panel header={`${title || name}`} style={colorBar}>
            <p className="repo-item-description">{description || 'No description provided.'}</p>
            <Row className='show-grid text-center'>
              <Col xs={3} md={3}>
                <div className="repo-item-icon">
                  <span className='octicon octicon-code'> </span>
                </div>
                <span className='repo-item-icon-detail repo-item-language' style={{paddingTop:'4px'}}>{primaryLanguage || 'unknown'}</span>
              </Col>
              <Col xs={3} md={3}>
                <div className="repo-item-icon">
                  <span className='octicon octicon-repo-forked' style={{paddingLeft:'4px'}}> </span>
                </div>
                <span className="repo-item-icon-detail">{NumberFormatter.format(forksCount)}</span>
              </Col>
              <Col xs={3} md={3}>
                <div className="repo-item-icon">
                  <span className='octicon octicon-star'> </span>
                </div>
                <span className="repo-item-icon-detail">{NumberFormatter.format(starsCount)}</span>
              </Col>
              <Col xs={3} md={3}>
                <div className="repo-item-icon">
                  <span className='octicon octicon-organization'> </span>
                </div>
                <span
                  className="repo-item-icon-detail">{NumberFormatter.format(contributorsCount)}</span>
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
