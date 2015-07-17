import restful from 'restful.js';
import _ from 'lodash';

var api = restful('catwatch-web.hackweek.zalan.do');

api.protocol('https');

api.addFullRequestInterceptor(function(params /*, headers, data, method, url*/) {
  // just return modified arguments
  return {
    params : _.extend({organizations: 'zalando'}, params)
  };
});

export default api;

let languages    = api.all('languages');
let statistics   = api.all('statistics');
let repositories = api.all('projects');

export {languages as languages};
export {statistics as statistics};
export {repositories as repositories};
