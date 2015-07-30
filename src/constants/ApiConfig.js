import parameters from '../config/parameters.json';

const API_CONFIG = {
  BASE_URL: parameters.CATWATCH_API.BASE_URL,
  PROTOCOL: parameters.CATWATCH_API.PROTOCOL,
  ORGANIZATIONS: parameters.CATWATCH_API.ORGANIZATIONS,
  REPOS: {
    DEFAULT_LIMIT: 6,
    ALL_LANGUAGE_FILTER: 'all'
  }
};

export default API_CONFIG;
