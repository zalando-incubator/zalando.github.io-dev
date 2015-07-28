import restful from 'restful.js';
import _ from 'lodash';
import API_CONFIG from '../constants/ApiConfig.js';
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

let addRandomRepoDescription = function (repos) {
  repos.forEach(function (repo) {
    let n = Math.floor(Math.random() * 130) + 30;
    let desc = addRandomRepoDescription.DESCRIPTION.substr(0, addRandomRepoDescription.DESCRIPTION.length - n).trim();
    repo.description = repo.description ? repo.description : desc + '.';
  });
  return repos;
};

/* eslint-disable */
addRandomRepoDescription.DESCRIPTION = "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.";
/* eslint-enable */

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
api.getRepos = function () {
  return repositories
    .getAll()
    .then(transformCollection)
    .then(addRandomRepoDescription)
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
