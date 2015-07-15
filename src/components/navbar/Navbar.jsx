import React from 'react';
import _ from 'lodash';
import $scrollTo from 'jquery.scrollto';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.options = _.extend({
      scrollTo: {
        duration: 400,
        offset: -40
      }
    }, props.options || {});
  }

  // Scroll to target
  scrollTo(target, event) {
    event.preventDefault();
    $scrollTo(target, this.options.scrollTo);
  }

  render() {
    let items = this.props.items.map((item) => {
      let href = '#' + item.hash;
      return (
        <li key={item.hash}>
          <a href={href} onClick={this.scrollTo.bind(this, href)}>{item.label}</a>
        </li>
      );
    });

    return (
      <nav className="Navbar">
        <ul>{items}</ul>
      </nav>
    );
  }
}
