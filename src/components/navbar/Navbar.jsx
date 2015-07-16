import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import NavbarItem from './NavbarItem.jsx';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.options = _.extend(Navbar.options, props.options || {});
    this.sections = {};
    this.$window = $(window);
    this.state = {
      section: null
    };
  }

  /**
   * Listen scroll dom event and trigger our custom scroll event
   * @return void
   */
  listenScroll() {
    var scrollTimer;
    this.$window.on('scroll', function(e) {
      if (scrollTimer) { clearTimeout(scrollTimer); }
      scrollTimer = setTimeout(function() {
        this.$window.trigger('navbar.scroll', { scrollEvent: e });
      }.bind(this), 500);
    }.bind(this));
  }

  componentDidMount() {

    this.populateSections();
    this.listenScroll();

    this.$window.on('navbar.scroll', function () {
      let section = this.getSection(this.$window.scrollTop());
      this.setState({section: section});
    }.bind(this));

  }

  /**
   * Get the current displayed section
   *
   * @param {float} windowPos
   * @returns {string|null}
   */
  getSection (windowPos) {
    var returnValue = null;
    var windowHeight = Math.round(this.$window.height() * this.options.scrollThreshold);

    for (var section in this.sections) {
      if ((this.sections[section] - windowHeight) < windowPos) {
        returnValue = section;
      }
    }

    return returnValue;
  }

  /**
   * Get the id/href for in page navigation targets
   *
   * @param {Object} item
   * @returns {string}
   */
  getId(item) {
    return '#' + item.hash;
  }

  /**
   * Populate sections property with sections positions
   * @returns {Object}
   */
  populateSections() {

    var linkHref;
    var topPos;
    var $target;

    this.props.items.forEach(function(item) {
      linkHref = this.getId(item);
      $target = $(linkHref);

      if ($target.length) {
        topPos = $target.offset().top;
        this.sections[linkHref] = Math.round(topPos);
      }
    }.bind(this));

    return this.sections;
  }

  render() {
    let items = this.props.items.map((item) => {
      return (
        <NavbarItem
          href={this.getId(item)}
          label={item.label}
          section={this.state.section}
          options={this.options} />
      );
    });

    return (
      <nav className="navbar">
        <ul>{items}</ul>
      </nav>
    );
  }
}

// TODO: propTypes validation
//Navbar.propTypes = {};

Navbar.options = {
  scrollThreshold: 0.3,
  scrollTo: {
    duration: 300,
    offset: -60
  }
};
