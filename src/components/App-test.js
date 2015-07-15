import React from 'react/addons';
import {expect} from 'chai';
import App from './App.jsx';

describe('My component', () => {
  let {TestUtils} = React.addons;
  let shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<App />);
  let app = shallowRenderer.getRenderOutput();

  // XXX - stupid assertion to manually test if the mocha runner is working
  it('should exists', function (){
    expect(app).to.not.equal(undefined);
  });
});
