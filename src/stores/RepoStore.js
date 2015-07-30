import assign from 'object-assign';
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';
import BaseStoreMixin from './BaseStoreMixin.js';

let repos = [];
let hasMore = true;
let language = 'all';
let page = -1;

let RepoStore = assign({}, BaseStoreMixin, {
  getRepos: function () {
    return repos;
  },
  hasMore: function () {
    return hasMore;
  },
  getPage: function () {
    return page;
  },
  getLanguage: function () {
    return language;
  }
});

RepoStore.dispatchToken = AppDispatcher.register(function (action) {
  switch (action.type) {
    case AppConstants.ActionTypes.RECEIVE_REPOS:

      if (language !== action.params.language) {
        repos = action.repos;
        hasMore = true;
      } else {
        repos = repos.concat(action.repos);
      }

      if (action.repos.length < action.params.limit) {
        hasMore = false;
      }

      language = action.params.language;
      page = action.params.offset / action.params.limit;

      RepoStore.emitChange();
      break;

    default:
    // do nothing
  }
});

module.exports = RepoStore;
