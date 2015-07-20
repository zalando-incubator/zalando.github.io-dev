import restful from 'restful.js';
import _ from 'lodash';
import API_CONFIG from '../constants/api-config.js';
import ReposActionCreators from '../actions/ReposActionCreators.js';

var api = restful(API_CONFIG.BASE_URL)
  .protocol(API_CONFIG.PROTOCOL)
  .addFullRequestInterceptor(function(params/*, headers, data, method, url*/) {
    return {
      params: _.extend({ organizations: API_CONFIG.ORGANIZATIONS }, params)
    };
  });

export default api;

// main end points
let repositories = api.all('projects');
let statistics = api.all('statistics');
let languages = api.all('languages');

// unwrap the response and return simple array of items
let transformCollection = function (response) {
    let body = response.body();
    let items = [];
    body.forEach(function (item) {
      items.push(item.data());
    });
    return items;
};

/**
 * Get the last stats snapshot
 *
 * @returns {Promise.<Object>}
 */
api.getStats = function () {
  return statistics.getAll().then(function (response) {
    let body = response.body();
    let statData;

    if (body.length) {
      statData = body[0].data();
      return {
        repos: statData.publicProjectCount || 0,
        stars: statData.allStarsCount || 0,
        forks: statData.allForksCount || 0,
        languages: statData.programLanguagesCount || 0
      };
    } else {
      return null;
    }
  });
};

/**
 * Get repositories/projects
 *
 * @returns {Promise.<Array>}
 */
api.getRepos = function () {
  return repositories
    .getAll()
    .then(transformCollection)
    .then(function (repos) {
      ReposActionCreators.receiveRepos(repos);
      return repos;
    });
};

/**
 * Get programming languages
 *
 * @returns {Promise.<Array>}
 */
api.getLanguages = function (){
  return languages.getAll().then(transformCollection);
};
