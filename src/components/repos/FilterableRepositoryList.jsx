import React from 'react';

import FilterBar from './FilterBar.jsx';
import RepositoryList from './RepositoryList.jsx';

class FilterableRepositoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      repositories: [
        {
          name: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          primaryLanguage: 'java',
          forksCount: 30,
          starsCount: 40
        },
        {
          name: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          primaryLanguage: 'javascript',
          forksCount: 30,
          starsCount: 40
        },
        {
          name: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          primaryLanguage: 'go',
          forksCount: 30,
          starsCount: 40
        },
        {
          name: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          primaryLanguage: 'java',
          forksCount: 30,
          starsCount: 40
        }
      ]
    };
    this.handleUserInput = this.handleUserInput.bind(this);
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
