import React from 'react';
import Stats from './stats/Stats.jsx';
import Navbar from './navbar/Navbar.jsx';
import FilterableRepositoryList from './repos/FilterableRepositoryList.jsx';
import Welcome from './welcome/Welcome.jsx';

import NAV_ITEMS from '../constants/navitems.js';

class App extends React.Component{
  render(){
    return (
      <div className="main-container">
        <Navbar items={NAV_ITEMS}/>
        <Welcome />
        <Stats/>
        <FilterableRepositoryList/>
      </div>
    );
  }
}

export default App;
