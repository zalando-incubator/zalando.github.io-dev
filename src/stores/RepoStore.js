import assign from 'object-assign';
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';
import BaseStoreMixin from './BaseStoreMixin.js';

let repos = [];
let hasMore = true;

let RepoStore = assign({}, BaseStoreMixin, {
  getRepos: function () {
    return repos;
  },

  hasMore: function () {
    return hasMore;
  }
});

RepoStore.dispatchToken = AppDispatcher.register(function (action) {
  switch (action.type) {
    case AppConstants.ActionTypes.RECEIVE_REPOS:
      repos = action.repos;
      hasMore = false;
      RepoStore.emitChange();
      break;
    case AppConstants.ActionTypes.RECEIVE_REPOS_PAGE:
      repos = repos.concat(action.repos);
      if (action.repos.length < action.limit) {
        hasMore = false;
      }
      RepoStore.emitChange();
      break;

    default:
    // do nothing
  }
});

module.exports = RepoStore;
