import React from 'react';
import Stats from './stats/Stats.jsx';
import Navbar from './navbar/Navbar.jsx';

import FilterableRepositoryList from './repos/FilterableRepositoryList.jsx';
import NAV_ITEMS from '../constants/Navitems.jsx';

class App extends React.Component{
  render(){
    return (
      <div className="main-container">
        <Navbar items={NAV_ITEMS}/>
        <Stats/>
        <FilterableRepositoryList/>
      </div>
    );
  }
}

export default App;
