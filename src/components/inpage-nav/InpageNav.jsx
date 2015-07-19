import React from 'react';

export default class InpageNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="react-inpage-nav">
        {this.props.children}
      </div>
    );
  }
}
