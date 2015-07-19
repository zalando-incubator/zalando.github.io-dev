import React from 'react';
import InpageNavBar from './InpageNavBar.jsx';

export default class InpageNavSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inpage-nav-section" id={this.props.target + InpageNavBar.SECTION_ID_SUFFIX}>
        {this.props.children}
      </div>
    );
  }
}
