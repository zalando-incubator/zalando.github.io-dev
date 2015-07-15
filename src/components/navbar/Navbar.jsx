import React from 'react';
import _ from 'lodash';
import NavbarItem from './NavbarItem.jsx';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.options = _.extend(Navbar.options, props.options || {});
  }

  render() {
    let items = this.props.items.map((item) => {
      return (<NavbarItem item={item} options={this.options} />);
    });

    return (
      <nav className="Navbar">
        <ul>{items}</ul>
      </nav>
    );
  }
}

Navbar.options = {
  scrollTo: {
    duration: 300,
    offset: -40
  }
};
