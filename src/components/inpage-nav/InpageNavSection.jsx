import React from 'react';

export default class InpageNavSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inpage-nav-section" id={this.props.target}>
        {this.props.children}
      </div>
    );
  }
}
