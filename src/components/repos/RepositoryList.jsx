/**
 * Created by aigreja on 15/07/15.
 */

import React from 'react';
import RepositoryListItem from './RepositoryListItem.jsx';
import {Grid, Row} from 'react-bootstrap';

class RepositoryList extends React.Component {

  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          {this.props.repositories.map(function(repo, i){
            return <RepositoryListItem key={i} data={repo} />;
          })}
        </Row>
      </Grid>
    );
  }
}

RepositoryList.propTypes = {
  repositories: React.PropTypes.array.isRequired
};

export default RepositoryList;

