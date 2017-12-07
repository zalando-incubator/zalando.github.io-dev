import parameters from '../config/parameters.json';
import ReactGA from 'react-ga';

const analytics = {
  canInitialize() {
    const location = window.location;
    const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    return !isLocalhost && parameters.GOOGLE_ANALYTICS && parameters.GOOGLE_ANALYTICS.TRACKING_ID;
  },
  initialize() {
    if (this.canInitialize()) {
      ReactGA.initialize(parameters.GOOGLE_ANALYTICS.TRACKING_ID);
    }
    return this;
  },
  pageview() {
    const location = window.location;
    ReactGA.pageview(location.pathname + location.search);
    return this;
  }
}

export default analytics;
