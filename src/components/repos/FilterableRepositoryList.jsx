import React from 'react';
import _ from 'lodash';
import FilterBar from './FilterBar.jsx';
import RepositoryList from './RepositoryList.jsx';
import RepoStore from '../../stores/RepoStore.js';
import LanguageStore from '../../stores/LanguageStore.js';
import SectionHeading from '../section-heading/SectionHeading.jsx';
import api from '../../utils/Api.js';
import AppConstants from '../../constants/AppConstants.jsx';
let InfiniteScroll = require('react-infinite-scroll')(React);

class FilterableRepositoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      topLanguages: LanguageStore.getTopLanguages(),
      repositories: RepoStore.getRepos(),
      hasMore: RepoStore.hasMore()
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.onReposChange = this.onReposChange.bind(this);
    this.onLanguagesChange = this.onLanguagesChange.bind(this);
  }

  componentDidMount() {
    RepoStore.addChangeListener(this.onReposChange);
    LanguageStore.addChangeListener(this.onLanguagesChange);
    api.getLanguages();
  }

  onLanguagesChange() {
    this.setState({
      topLanguages: LanguageStore.getTopLanguages()
    });
  }

  onReposChange() {
    this.setState({
      repositories: RepoStore.getRepos(),
      hasMore: RepoStore.hasMore()
    });
  }

  handleUserInput(filter) {
    let newRepoList;
    if (filter === 'all') {
      newRepoList = RepoStore.getRepos();
    } else if (filter === 'other') {
      //the others button filters for all non top languages
      newRepoList = _.reject(RepoStore.getRepos(), (repo) => _.find(this.state.topLanguages, {name: repo.primaryLanguage}));
    }
    else {
      newRepoList = _.filter(RepoStore.getRepos(), {'primaryLanguage': filter});
    }
    this.setState({
      filter: filter,
      repositories: newRepoList
    });
  }

  loadMore(pageToLoad){
    api.getReposByPage(pageToLoad * AppConstants.Pagination.PAGE_SIZE);
  }

  render() {
    return (
      <div className='repos'>
        <div className="container section">
        <SectionHeading text="Repositories" />
        <FilterBar
          languages={this.state.topLanguages}
          filter={this.state.filter}
          onUserInput={this.handleUserInput}
          />
        <InfiniteScroll pageStart={-1} loader={<div className="loader">Loading ...</div>}
                        loadMore={this.loadMore} hasMore={this.state.hasMore}>
          <RepositoryList
            repositories={this.state.repositories}
            />
        </InfiniteScroll>
        </div>
      </div>
    );
  }

}

export default FilterableRepositoryList;
