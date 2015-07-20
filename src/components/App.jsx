import React from 'react';

import navItems from '../constants/NavItems.js';
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
          <NavBar items={navItems} />
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
