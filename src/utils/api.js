import restful from 'restful.js';
import _ from 'lodash';
import API_CONFIG from '../constants/api-config.js';

var api = restful(API_CONFIG.BASE_URL)
  .protocol(API_CONFIG.PROTOCOL)
  .addFullRequestInterceptor(function(params/*, headers, data, method, url*/) {
    return {
      params: _.extend({ organizations: API_CONFIG.ORGANIZATIONS }, params)
    };
  });

export default api;

let languages = api.all('languages');
let statistics = api.all('statistics');
let repositories = api.all('projects');

export {languages as languages};
export {statistics as statistics};
export {repositories as repositories};
