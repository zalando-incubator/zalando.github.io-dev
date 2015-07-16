import React from 'react';
import _ from 'lodash';
import FilterBar from './FilterBar.jsx';
import RepositoryList from './RepositoryList.jsx';
import RepoStore from '../../stores/RepoStore.js'

class FilterableRepositoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      repositories: RepoStore.getRepos()
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filter) {
    let newRepoList;
    if (filter === 'all') {
      newRepoList = RepoStore.getRepos();
    } else {
      newRepoList = _.filter(RepoStore.getRepos(), {'primaryLanguage': filter});
    }
    this.setState({
      filter: filter,
      repositories: newRepoList
    });
    console.log(newRepoList);
  }

  render() {
    return (
      <div className='container'>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="section-heading">Repositories</h3>
              {/*<hr className="primary"></hr> */}
            </div>
          </div>
          <FilterBar
            filter={this.state.filter}
            onUserInput={this.handleUserInput}
            />
          <RepositoryList
            repositories={this.props.repositories}
            filter={this.state.filter}
            />
      </div>
    );
  }
}

export default FilterableRepositoryList;
