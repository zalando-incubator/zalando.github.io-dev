import React from 'react';
import SimpleInpagenav from 'react-simple-inpagenav';

import AppConstants from '../constants/AppConstants.jsx';
import MainNav from './main-nav/MainNav.jsx';
import Welcome from './welcome/Welcome.jsx';
import Stats from './stats/Stats.jsx';
import FilterableRepositoryList from './repos/FilterableRepositoryList.jsx';

class App extends React.Component{
  render(){
    return (
      <div className="main-container">
        <MainNav />
        <SimpleInpagenav options={AppConstants.SIMPLE_INPAGENAV_OPTIONS}>
          <SimpleInpagenav.Section target="statistics">
            <Welcome>
              <Stats />
            </Welcome>
          </SimpleInpagenav.Section>
          <SimpleInpagenav.Section target="repositories">
            <FilterableRepositoryList />
          </SimpleInpagenav.Section>
        </SimpleInpagenav>
      </div>
    );
  }
}

export default App;
