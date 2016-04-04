'use strict';

jest.unmock('../components/stats/Stat.jsx');
jest.unmock('../components/stats/Stats.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Stat from '../components/stats/Stat.jsx';
import Stats from '../components/stats/Stats.jsx';
import SectionHeading from '../components/section-heading/SectionHeading.jsx';

describe('Stats component', () => {
  let stats, statsNode;
  beforeEach(function() {
    stats = TestUtils.renderIntoDocument(<Stats />);
    statsNode = ReactDOM.findDOMNode(stats);
  });

  it('should render heading', () => {
    const sectionHeading = TestUtils.scryRenderedDOMComponentsWithClass(stats, 'section-heading');
  });

  it('should be rendered with 6 Stat components', () => {
    const statsCount = TestUtils.scryRenderedDOMComponentsWithClass(stats, 'stat-icon');
    expect(statsCount.length).toEqual(6);
  });

});
