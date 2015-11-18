import React from 'react';
import SimpleInpagenav from 'react-simple-inpagenav';

import AppConstants from '../constants/AppConstants.jsx';
import Welcome from './welcome/Welcome.jsx';
import Stats from './stats/Stats.jsx';
import Graphs from './graphs/Graphs.jsx';
import FilterableRepositoryList from './repos/FilterableRepositoryList.jsx';

class App extends React.Component{
  render(){
    return (
      <div className="main-container">
        <SimpleInpagenav options={AppConstants.SIMPLE_INPAGENAV_OPTIONS}>
          <SimpleInpagenav.Bar>
            <SimpleInpagenav.BarItem target="welcome">
              <div>
                <span className="claim">Zalando.</span>
                <span className="claim">we <i className="claim-heart">&hearts;</i> open source.</span>
              </div>
            </SimpleInpagenav.BarItem>
            <SimpleInpagenav.BarItem target="repositories">repositories</SimpleInpagenav.BarItem>
            <SimpleInpagenav.BarItem target="graphs">graphs</SimpleInpagenav.BarItem>
            <SimpleInpagenav.BarItem target="statistics">statistics</SimpleInpagenav.BarItem>
          </SimpleInpagenav.Bar>
          <SimpleInpagenav.Section target="welcome">
            <Welcome />
          </SimpleInpagenav.Section>
          <SimpleInpagenav.Section target="statistics">
            <Stats />
          </SimpleInpagenav.Section>
          <SimpleInpagenav.Section target="graphs">
            <Graphs />
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
