/**
 * Created by aigreja on 15/07/15.
 */

import React from 'react';
import RepositoryListItem from './RepositoryListItem.jsx';
import {Row} from 'react-bootstrap';

class RepositoryList extends React.Component {

  render() {
    return (
        <Row className='show-grid'>
          {this.props.repositories.map(function(repo, i){
            return <RepositoryListItem key={i} data={repo} />;
          })}
        </Row>
    );
  }
}

RepositoryList.propTypes = {
  repositories: React.PropTypes.array.isRequired
};

export default RepositoryList;

