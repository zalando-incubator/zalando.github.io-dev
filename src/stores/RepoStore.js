import assign from 'object-assign';
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';
import BaseStoreMixin from './BaseStoreMixin.js';

let repos = [];
let hasMore = true;
let language = 'all';
let page = -1;

let log = function (method, ...args) {
  /* eslint-disable no-console */
  if (console && console[method]) {
    return console[method].apply(console, args);
  }
  /* eslint-enable no-console */
};

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

RepoStore.getIdentifiers = function (_repos) {
  return (_repos || []).map((repo) => { return repo.gitHubProjectId; });
};

RepoStore.hasDuplicates = function (_repos) {
  let duplicates = RepoStore.getIdentifiers(_repos).filter((id) => {
    return RepoStore.getIdentifiers(RepoStore.getRepos()).indexOf(id) > -1;
  });
  return duplicates.length > 0 ? duplicates : false;
};

RepoStore.dispatchToken = AppDispatcher.register(function (action) {
  switch (action.type) {
    case AppConstants.ActionTypes.RECEIVE_REPOS:
      let newPage = action.params.offset / action.params.limit;

      if (language !== action.params.language) {
        repos = action.repos;
        hasMore = true;

      } else {

        if (newPage === page) {
          log('warn', 'Page already added. aborting repo emit change.');
          return;
        }
        if (RepoStore.hasDuplicates(action.repos)) {
          log('warn', 'Projects duplicates. aborting repo emit change.', {
            duplicates: RepoStore.hasDuplicates(action.repos),
            allRepos: repos,
            page: page,
            newPage: newPage
          });
          page = newPage;
          return;
        }

        repos = repos.concat(action.repos);
      }

      if (action.repos.length < action.params.limit) {
        hasMore = false;
      }

      language = action.params.language;
      page = newPage;

      RepoStore.emitChange();
      break;

    default:
    // do nothing
  }
});

module.exports = RepoStore;
