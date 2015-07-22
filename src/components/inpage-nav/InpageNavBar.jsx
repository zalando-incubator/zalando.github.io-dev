import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import $scrollTo from 'jquery.scrollto';

import InpageNavBarItem from './InpageNavBarItem.jsx';

export default class InpageNavBar extends React.Component {

  constructor(props) {
    super(props);

    this.options = _.extend(InpageNavBar.options, props.options || {});
    this.options.scrollTo.onAfter = this.options.scrollTo.onAfter.bind(this);

    this.sections = {};
    this.$window = $(window);
    this.shouldReactOnScroll = true;

    // fired when a ``InPageNavBarItem``` is clicked
    this.onClickCallback = function (section){

      this.shouldReactOnScroll = false;
      $scrollTo(this.getSectionId(window.location.hash), this.options.scrollTo);
      this.setState({section: section});

    }.bind(this);

    this.state = {
      section: null
    };
  }

  /**
   * Listen scroll dom event and trigger our custom "debounced" scroll event
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

    this.$window.on('resize', function() {
      this.populateSections(); // recalculate section positions on resize
    }.bind(this));
  }

  componentDidMount() {
    this.populateSections();
    this.listenScroll();

    this.setState({ section: this.getSection() });

    this.$window.on('navbar.scroll', function () {
      if (this.shouldReactOnScroll === true) {
        let section = this.getSection();
        window.location.hash = section;
        this.setState({section: section});
      }
    }.bind(this));
  }

  /**
   * @returns {boolean}
   */
  scrollReachTheBottom() {
    return this.$window.scrollTop() + this.$window.height() === $(document).height();
  }

  /**
   * @param section position
   * @returns {boolean}
   */
  isTheVisibleArea(pos) {
    let windowPos = this.$window.scrollTop();
    let windowHeight = Math.round(this.$window.height() * this.options.scrollThreshold);

    return (pos - windowHeight) < ( windowPos + this.options.scrollOffset);
  }

  /**
   * Get the current "visible" section identifier
   *
   * @returns {string} - the identifier
   */
  getSection () {
    let returnValue = null;
    let sections = [];

    for (let section in this.sections) {
      sections.push({id: section, pos: this.sections[section]});
    }
    sections = _.sortByOrder(sections, function (sec) {
      return sec.pos;
    }, ['desc']);

    // scroll reach the bottom
    // current section is the "last" (more close to the bottom of the display)
    if (this.scrollReachTheBottom()) {
      returnValue = sections[0].id;
      return returnValue;
    }

    for (let i = 0; i < sections.length; i++) {
      if ( this.isTheVisibleArea(sections[i].pos) ) {
        returnValue = sections[i].id;
        break;
      }
    }

    return returnValue;
  }

  /**
   * @param {Object} item
   * @returns {string}
   */
  getHref(item) {
    return '#' + item.target;
  }

  /**
   * @param {string} hash
   * @returns {string}
   */
  getSectionId(hash) {
    return hash + InpageNavBar.SECTION_ID_SUFFIX;
  }

  /**
   * Populate sections property with sections positions
   *
   * @returns {Object}
   */
  populateSections() {
    let hash;
    let topPos;
    let $section;

    this.props.items.forEach(function(item) {
      hash = this.getHref(item);
      $section = $(this.getSectionId(hash));

      if ($section.length) {
        topPos = $section.offset().top;
        this.sections[hash] = Math.round(topPos);
      }
    }.bind(this));

    return this.sections;
  }

  render() {
    let items = this.props.items.map((item) => {
      return (
        <InpageNavBarItem
          key={item.target}
          href={this.getHref(item) }
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
InpageNavBar.SECTION_ID_SUFFIX = '__in-page-navbar';

InpageNavBar.options = {
  scrollThreshold: 0.3,
  scrollOffset: 58,
  scrollTo: {
    duration: 300,
    offset: -60,
    // FIXME this callback can't be overwritten
    onAfter: function () {
      this.shouldReactOnScroll = true;
    }
  }
};
