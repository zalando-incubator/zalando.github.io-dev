import _ from 'lodash';
import API_CONFIG from '../constants/ApiConfig.js';
import github from '../stores/github.js';

var api = {};
api.API_CONFIG = _.extend({}, API_CONFIG);
export default api;


/**
 * Get the last stats snapshot
 *
 * @returns {Object}
 */
api.getStats = function () {
  return github.stats;
};

/**
 * Get repositories/projects
 *
 * @returns {Promise.<Array>}
 */
api.getRepos = function (params) {
  let options = _.merge({ limit: 15, offset: 0 }, params || {});
  let from = options.offset;
  let to = from + options.limit;
  let withLanguage = function(x) { return params.language === 'all' || params.language === x.primaryLanguage; };
  return new Promise(function(resolve, reject) {
    resolve(_.filter(github.repos, withLanguage).slice(from, to));
    reject();
  });
};

/**
 * Get programming languages
 *
 * @returns {Promise.<Array>}
 */
api.getLanguages = function () {
  let result = [
    {'color': '#3572a5', 'name': 'Python'},
    {'color': '#b07219', 'name': 'Java'},
    {'color': '#f4cf34', 'name': 'JavaScript'},
    {'color': '#89e051', 'name': 'Shell'},
    {'color': '#357eab', 'name': 'Go'},
    {'color': '#db5855', 'name': 'Clojure'},
    {'color': '#7dd3b0', 'name': 'Scala'}
  ];
  return new Promise(function(resolve, reject) {
    resolve(result);
    reject();
  });
};
