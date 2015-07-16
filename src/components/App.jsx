import React from 'react';
import Stats from './stats/Stats.jsx';
import Navbar from './navbar/Navbar.jsx';

import FilterableRepositoryList from './repos/FilterableRepositoryList.jsx';

let ITEMS = [
  {label: 'stats', hash: 'stats'},
  {label: 'repositories', hash: 'repositories'}
];

class App extends React.Component{
  render(){
    return (
      <div className="main-container">
        <Navbar items={ITEMS}/>
        <Stats/>
        <FilterableRepositoryList/>
      </div>
    );
  }
}

export default App;
