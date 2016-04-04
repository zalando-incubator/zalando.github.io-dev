import React from 'react';
import FilterBar from './FilterBar.jsx';
import RepositoryList from './RepositoryList.jsx';
import SectionHeading from '../section-heading/SectionHeading.jsx';
import ActionCreators from '../../actions/ReposActionCreators.js';
import Store from '../../stores/ReposStore.js';
import InfiniteScroll from 'react-infinite-scroller';


class FilterableRepositoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = Store.getState();
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    ActionCreators.fetchInitialData();
  }

  onChange() {
    this.setState(Store.getState());
  }

  /**
   * @param {string} language
   */
  handleLanguageChange(language) {
    ActionCreators.languageChange(language);
  }

  loadMore(page){
    if (Store.isPending()) {
      return;
    }
    ActionCreators.fetchMore(page, this.state.language);
  }

  render() {
    return (
      <div className='repos'>
        <div className="container section">
        <SectionHeading text="Repositories" />
        <FilterBar
          language={this.state.language}
          languages={this.state.topLanguages}
          onLanguageChange={this.handleLanguageChange}
          />
          <InfiniteScroll pageStart={this.state.page} loader={<div className="loader repo-loader">Loading ...</div>}
                          loadMore={this.loadMore.bind(this)} hasMore={this.state.hasMore}>
            <RepositoryList repositories={this.state.repos} />
          </InfiniteScroll>
        </div>
      </div>
    );
  }

}

export default FilterableRepositoryList;
