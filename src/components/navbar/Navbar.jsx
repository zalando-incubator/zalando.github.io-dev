import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import NavbarItem from './NavbarItem.jsx';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.options = _.extend(Navbar.options, props.options || {});
    this.sections = {};
    console.log(this.props.items);
    this.state = {
      section: null
    }
  }

  componentDidMount() {

    this.populateSections();
    console.log(this.sections);

    var scrollTimer;
    $(window).on('scroll', function(e) {
      if (scrollTimer) { clearTimeout(scrollTimer); }
      scrollTimer = setTimeout(function() {
        $(window).trigger('navbar.scroll', {scrollEvent : e });
      }, 500);
    });

    $(window).on('navbar.scroll', function () {
      let section = this.getSection($(window).scrollTop());
      this.setState({section: section});
      console.log(section);
    }.bind(this));
  }

  getSection (windowPos) {
    var returnValue = null;
    var windowHeight = Math.round($(window).height() * this.options.scrollThreshold);

    for(var section in this.sections) {
      if((this.sections[section] - windowHeight) < windowPos) {
        returnValue = section;
      }
    }

    return returnValue;
  }

  getId(item) {
    return '#' + item.hash;
  }

  populateSections() {
    var linkHref;
    var topPos;
    var $target;

    this.props.items.forEach(function(item) {
      linkHref = this.getId(item);
      $target = $(linkHref);

      if($target.length) {
        topPos = $target.offset().top;
        this.sections[linkHref] = Math.round(topPos);
      }
    }.bind(this));

    return this.sections;
  }

  render() {
    let items = this.props.items.map((item) => {
      return (<NavbarItem href={this.getId(item)}
                          label={item.label}
                          section={this.state.section}
                          options={this.options} />);
    });

    return (
      <nav className="Navbar">
        <ul>{items}</ul>
      </nav>
    );
  }
}

Navbar.options = {
  scrollThreshold: 0.3,
  scrollTo: {
    duration: 300,
    offset: -40
  }
};
