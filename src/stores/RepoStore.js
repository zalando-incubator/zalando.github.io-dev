import assign from 'object-assign';
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import BaseStoreMixin from './BaseStoreMixin.js';

let repos = [];

let RepoStore = assign({}, BaseStoreMixin, {
  getRepos: function() {
    return repos;
  }
});

RepoStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case AppConstants.ActionTypes.RECEIVE_REPOS:
      repos = action.repos;
      RepoStore.emitChange();
      break;

    default:
    // do nothing
  }
});

module.exports = RepoStore;
