import React from 'react';
import $scrollTo from 'jquery.scrollto';

export default class NavbarItem extends React.Component {

  constructor(props) {
    super(props);
  }

  // Scroll to target
  scrollTo(target, event) {
    event.preventDefault();
    $scrollTo(target, this.props.options.scrollTo);
  }

  render() {
    let href = '#' + this.props.item.hash;
    return (
      <li key={this.props.item.hash}>
        <a href={href} onClick={this.scrollTo.bind(this, href)}>{this.props.item.label}</a>
      </li>
    );
  }
}
