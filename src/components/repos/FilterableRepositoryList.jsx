import React from 'react';
import FilterBar from './FilterBar.jsx';
import RepositoryList from './RepositoryList.jsx';
import RepoStore from '../../stores/RepoStore.js';
import LanguageStore from '../../stores/LanguageStore.js';
import SectionHeading from '../section-heading/SectionHeading.jsx';
import api from '../../utils/Api.js';

let InfiniteScroll = require('react-infinite-scroll')(React);

class FilterableRepositoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: RepoStore.getLanguage(),
      topLanguages: LanguageStore.getTopLanguages(),
      repositories: RepoStore.getRepos(),
      page: RepoStore.getPage(),
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
      page: RepoStore.getPage(),
      language: RepoStore.getLanguage(),
      hasMore: RepoStore.hasMore()
    });
  }

  /**
   *
   * @param {string} language
   */
  handleUserInput(language) {
    if (this.state.language === language && language === api.API_CONFIG.REPOS.ALL_LANGUAGE_FILTER) { return; }
    api
      .getRepos({ language: language, limit: api.API_CONFIG.REPOS.DEFAULT_LIMIT, offset: 0 });
  }

  loadMore(page){
    api.getRepos({
      limit: api.API_CONFIG.REPOS.DEFAULT_LIMIT,
      offset: page * api.API_CONFIG.REPOS.DEFAULT_LIMIT,
      language: this.state.language
    });
  }

  render() {
    return (
      <div className='repos'>
        <div className="container section">
        <SectionHeading text="Repositories" />
        <FilterBar
          languages={this.state.topLanguages}
          language={this.state.language}
          onUserInput={this.handleUserInput}
          />
        <InfiniteScroll pageStart={this.state.page} loader={<div className="loader repo-loader">Loading ...</div>}
                        loadMore={this.loadMore.bind(this)} hasMore={this.state.hasMore}>
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
