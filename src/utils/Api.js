import _ from 'lodash';
import API_CONFIG from '../constants/ApiConfig.js';
import github from "../stores/github.js";

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
  let withLanguage = function(x) { return params.language === 'all' || params.language === x.primaryLanguage; }
  return new Promise(function(resolve, reject) {
    resolve(_.filter(github.repos, withLanguage).slice(from, to));
  });  
};

/**
 * Get programming languages
 *
 * @returns {Promise.<Array>}
 */
api.getLanguages = function () {
  let result = [
    new Object({'color': '#3572a5', 'name': 'Python'}),
    new Object({'color': '#b07219', 'name': 'Java'}),
    new Object({'color': '#f4cf34', 'name': 'JavaScript'}),
    new Object({'color': '#89e051', 'name': 'Shell'}),
    new Object({'color': '#357eab', 'name': 'Go'}),
    new Object({'color': '#db5855', 'name': 'Clojure'}),
    new Object({'color': '#7dd3b0', 'name': 'Scala'})
  ];
  return new Promise(function(resolve, reject) {
    resolve(result);
  });  
};
