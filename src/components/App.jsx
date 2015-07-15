import React from 'react';
import Stats from './stats/Stats.jsx';
import {Button} from 'react-bootstrap';
import FilterableRepositoryList from './repos/FilterableRepositoryList.jsx';

class App extends React.Component{
  render(){
    return (
      <div className="main-container">
        <Stats/>

        <Button className="join-us-btn" bsStyle="primary" bsSize="large">Join us</Button>

        <FilterableRepositoryList/>
      </div>
    );
  }
}

export default App;
