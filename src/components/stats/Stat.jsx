import React from 'react';

class Stat extends React.Component {
  render() {
    return (
      <div className='stat'>
        <img src='../images/icon.png' width='40px' height='40px' alt='Icon'/>
        <div>
            <br></br>
              <h2>{this.props.count}</h2>
              <span></span>
              <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

Stat.propTypes = {
  count: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Stat;
