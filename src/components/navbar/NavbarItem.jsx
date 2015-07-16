import React from 'react';
import $ from 'jquery';
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
    let href = this.props.href;
    let className = this.props.section === href ? 'active': '';

    return (
      <li key={href}>
        <a href={href} onClick={this.scrollTo.bind(this, href)}
           className={className}>{this.props.label}</a>
      </li>
    );
  }
}
