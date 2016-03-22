import restful from 'restful.js';
import _ from 'lodash';
import API_CONFIG from '../constants/ApiConfig.js';
import languagesUtil from '../utils/LanguagesUtil.js';
import github from "../stores/github.js";

var api = restful(API_CONFIG.BASE_URL)
  .protocol(API_CONFIG.PROTOCOL)
  .addFullRequestInterceptor(function (params/*, headers, data, method, url*/) {
    return {
      params: _.extend({organizations: API_CONFIG.ORGANIZATIONS}, params)
    };
  });

api.API_CONFIG = _.extend({}, API_CONFIG);

export default api;

// main end points
let repositories = api.all('projects');
let statistics = api.all('statistics');
let languages = api.all('languages');
let statisticsProjects = api.all('statistics/projects');
let statisticsLanguages = api.all('statistics/languages');


languages.addResponseInterceptor(function (data) {
  languagesUtil.addMetadata(data);
  return data;
});

// unwrap the response and return simple array of items
let transformCollection = function (response) {
  let body = response.body();
  let items = [];
  if (body.length) {
    body.forEach(function (item) {
      items.push(item.data());
    });
  }
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
        languages: statData.programLanguagesCount || 0,
        members: statData.membersCount || 0,
        contributors: statData.allContributorsCount || 0
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
  return languages
    .getAll({limit: 50, offset: 0})
    .then(transformCollection)
    .then(function (langs) {
      return langs;
    });
};

api.getStatisticsProjects = function () {
  return statisticsProjects.getAll().then(function (response) {
    return response.body();
  });
};

api.getStatisticsLanguages = function () {
  return statisticsLanguages.getAll().then(function (response) {
    return response.body();
  });
};
