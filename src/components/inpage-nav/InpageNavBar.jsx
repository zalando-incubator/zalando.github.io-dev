import React from 'react';
import _ from 'lodash';
import $ from 'jquery';

import InpageNavBarItem from './InpageNavBarItem.jsx';

export default class InpageNavBar extends React.Component {

  constructor(props) {
    super(props);

    this.options = _.extend(InpageNavBar.options, props.options || {});
    this.options.scrollTo.onAfter = this.options.scrollTo.onAfter.bind(this);

    this.sections = {};
    this.$window = $(window);
    this.shouldReactOnScroll = true;
    this.onClickCallback = function (section){
      this.shouldReactOnScroll = false;
      this.setState({section: section});
    }.bind(this);

    this.state = {
      section: null
    };
  }

  /**
   * Listen scroll dom event and trigger our custom scroll event
   * @return void
   */
  listenScroll() {
    let scrollTimer;

    this.$window.on('scroll', function(e) {
      if (scrollTimer) { clearTimeout(scrollTimer); }

      scrollTimer = setTimeout(function() {
        this.$window.trigger(InpageNavBar.SCROLL_EVENT, { scrollEvent: e });
      }.bind(this), InpageNavBar.SCROLL_EVENT_DELAY);

    }.bind(this));
  }

  componentDidMount() {
    this.populateSections();
    this.listenScroll();

    this.$window.on('navbar.scroll', function () {
      if (this.shouldReactOnScroll === true) {
        let section = this.getSection(this.$window.scrollTop());
        this.setState({section: section});
      }
    }.bind(this));
  }

  /**
   * Get the current displayed section
   *
   * @param {float} windowPos
   * @returns {string|null}
   */
  getSection (windowPos) {
    let returnValue = null;
    let windowHeight = Math.round(this.$window.height() * this.options.scrollThreshold);

    for (var section in this.sections) {
      if ((this.sections[section] - windowHeight) < ( windowPos + (this.options.scrollOffset) )) {
        returnValue = section;
      }
    }

    // scroll reached the bottom, current section is the last one
    if (this.props.items.length && windowPos + this.$window.height() === $(document).height()) {
      return this.getId(this.props.items[this.props.items.length - 1]);
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
    return '#' + item.target;
  }

  /**
   * Populate sections property with sections positions
   * @returns {Object}
   */
  populateSections() {
    let linkHref;
    let topPos;
    let $target;

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
        <InpageNavBarItem
          key={item.target}
          href={this.getId(item) }
          label={item.label}
          section={this.state.section}
          options={this.options}
          onClickCallback={this.onClickCallback} />
      );
    });

    return (
      <nav className="inpage-nav-bar">
        <ul>{items}</ul>
      </nav>
    );
  }
}


InpageNavBar.SCROLL_EVENT = 'navbar.scroll';
InpageNavBar.SCROLL_EVENT_DELAY = 300;

InpageNavBar.options = {
  scrollThreshold: 0.3,
  scrollOffset: 58,
  scrollTo: {
    duration: 300,
    offset: -60,
    onAfter: function () {
      // "re-activate" the state change when user scroll, after scrollTo animation end
      this.shouldReactOnScroll = true;
    }
  }
};
