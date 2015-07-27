import React from 'react';

class Stat extends React.Component {
  render() {
    return (
      <div className='stat'>
        <div className="stat-icon">
          <span className={this.props.icon}> </span>
        </div>
        <div>
          <h2>{this.props.count}</h2>
          <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

Stat.propTypes = {
  icon: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Stat;
