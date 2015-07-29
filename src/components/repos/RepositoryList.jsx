/**
 * Created by aigreja on 15/07/15.
 */

import React from 'react/addons';
import RepositoryListItem from './RepositoryListItem.jsx';
import {Row} from 'react-bootstrap';

class RepositoryList extends React.Component {



  render() {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    return (
        <Row className='show-grid'>
          <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
          {this.props.repositories.map(function(repo, i){
            console.log(repo);
            return <RepositoryListItem key={i} data={repo} />;
          })}
          </ReactCSSTransitionGroup>
        </Row>
    );
  }
}

RepositoryList.propTypes = {
  repositories: React.PropTypes.array.isRequired
};

export default RepositoryList;

