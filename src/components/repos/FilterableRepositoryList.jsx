import React from 'react';

import FilterBar from './FilterBar.jsx';
import RepositoryList from './RepositoryList.jsx';

class FilterableRepositoryList extends React.Component {

  constructor(props) {
    super(props);
    this.props.repositories = {

    };
    this.state = {
      filter: 'all'
    };
  }

  handleUserInput(filter) {
    this.setState({
      filter: filter
    });
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
