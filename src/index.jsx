import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import analytics from './utils/Analytics';

window.React = React;

ReactDOM.render(<App />, document.getElementById('app'));

if (analytics.canInitialize()) {
  analytics.initialize().pageview();
}
