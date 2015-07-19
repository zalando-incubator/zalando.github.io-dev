import React from 'react';

export default class SectionHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <h3 className="section-heading">{this.props.text}</h3>
        </div>
      </div>
    );
  }
}

SectionHeading.propTypes = {
  text: React.PropTypes.string.isRequired
};
