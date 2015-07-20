import React from 'react';

import SectionHeading from '../section-heading/SectionHeading.jsx';

export default class Welcome extends React.Component
{
  render() {
    return (
      <div className="container" id="welcome-container">
        <SectionHeading text="welcome" />
      </div>
    );
  }
}
