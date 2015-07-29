import restful from 'restful.js';
import _ from 'lodash';
import API_CONFIG from '../constants/ApiConfig.js';
import ReposActionCreators from '../actions/ReposActionCreators.js';
import LanguageActionCreators from '../actions/LanguageActionCreators.js';
import languagesUtil from '../utils/LanguagesUtil.js';

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

languages.addResponseInterceptor(function(data) {
  languagesUtil.addMetadata(data);
  return data;
});

// unwrap the response and return simple array of items
let transformCollection = function (response) {
    let body = response.body();
    let items = [];
    body.forEach(function (item) {
      items.push(item.data());
    });
    return items;
};

// XXX
let addRandomRepoDescription = function (repos) {
  repos.forEach(function (repo) {
    let n = Math.floor(Math.random() * 240) + 130;
    let desc = addRandomRepoDescription.DESCRIPTION.substr(0, addRandomRepoDescription.DESCRIPTION.length - n).trim();
    repo.description = repo.description ? repo.description : desc + '.';
  });
  return repos;
};

/* eslint-disable */
addRandomRepoDescription.DESCRIPTION = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.";
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
    .getAll({limit: 10000, offset: 0, sortBy: '-score'}) // all
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
  return languages
    .getAll({limit: 50, offset: 0})
    .then(transformCollection)
    .then(function (langs) {
      LanguageActionCreators.receiveLanguages(langs);
      return langs;
    });
};
