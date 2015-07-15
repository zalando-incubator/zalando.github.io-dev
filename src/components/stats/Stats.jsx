import React from 'react';

import Stat from './Stat.jsx';

class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: 40,
      stars: 100,
      forks: 100,
      languages: 20
    };
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="section-heading" id="stats">Stats</h3>
            {/*<hr className="primary"></hr> */}
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 col-xs-6 col-lg-3">
            <Stat name='REPOS' count={this.state.repos}/>
          </div>
          <div className="col-md-4 col-xs-6 col-lg-3">
            <Stat name='STARS' count={this.state.stars}/>
          </div>
          <div className="col-md-4 col-xs-6 col-lg-3">
            <Stat name='FORKS' count={this.state.forks}/>
          </div>
          <div className="col-md-4 col-xs-6 col-lg-3">
            <Stat name='LANGUAGES' count={this.state.languages}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
