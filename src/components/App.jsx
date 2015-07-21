import React from 'react';
import AppConstants from '../constants/AppConstants.jsx';
import InpageNav from './inpage-nav/InpageNav.jsx';
import { default as NavBar } from './inpage-nav/InpageNavBar.jsx';
import { default as Section } from './inpage-nav/InpageNavSection.jsx';
import Welcome from './welcome/Welcome.jsx';
import Stats from './stats/Stats.jsx';
import FilterableRepositoryList from './repos/FilterableRepositoryList.jsx';

class App extends React.Component{
  render(){
    return (
      <div className="main-container">
        <InpageNav>
          <NavBar items={AppConstants.NavItems} />
          <Section target="welcome">
            <Welcome />
          </Section>
          <Section target="stats">
            <Stats />
          </Section>
          <Section target="repositories">
            <FilterableRepositoryList />
          </Section>
        </InpageNav>
      </div>
    );
  }
}

export default App;
