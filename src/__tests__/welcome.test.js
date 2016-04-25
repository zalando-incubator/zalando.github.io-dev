'use strict';

jest.unmock('../components/welcome/Welcome.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Welcome from '../components/welcome/Welcome.jsx';

describe('Welcome component', () => {

  it('should be rendered with image', () => {
    // Render a Welcome component with img inside
    const welcome = TestUtils.renderIntoDocument(
      <Welcome />
    );
    const welcomeNode = ReactDOM.findDOMNode(welcome);
    const img = TestUtils.findRenderedDOMComponentWithTag(welcome, 'img');
    expect(img.src).toEqual('images/welcome.jpg');
  });

});
