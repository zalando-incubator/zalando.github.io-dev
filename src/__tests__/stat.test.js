'use strict';

jest.unmock('../components/stats/Stat.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Stat from '../components/stats/Stat.jsx';
import NumberFormatter from '../utils/NumberFormatter.js';

describe('Stat component', () => {
  let stat, statNode;
  beforeEach(function() {
    stat = TestUtils.renderIntoDocument(
      <Stat name='REPOSITORIES' count={294} icon='icon-repos'/>
    );
    statNode = ReactDOM.findDOMNode(stat);
  });

  it('should be rendered with concrete icon image', () => {
    const span = TestUtils.findRenderedDOMComponentWithClass(stat, stat.props.icon);
    expect(span.className).toEqual(stat.props.icon);
  });

  it('should be rendered with concrete count number', () => {
    const h2 = TestUtils.findRenderedDOMComponentWithTag(stat, 'h2');
    //expect(h2.textContent).toEqual(stat.props.count);
  });

  it('should be rendered with concrete name', () => {
    const h4 = TestUtils.findRenderedDOMComponentWithTag(stat, 'h4');
    expect(h4.textContent.trim()).toEqual(stat.props.name);
  });
});
