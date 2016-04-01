import assign from 'object-assign';
import _ from 'lodash';
import HashUtil from '../utils/HashUtil.js';
import log from '../utils/log.js';
import BaseStoreMixin from './BaseStoreMixin.js';
import AppConstants from '../constants/AppConstants.jsx';
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import api from '../utils/Api.js';

let state = {
  language: 'all',
  topLanguages: [],
  repos: [],
  hasMore: true,
  pending: true,
  page: 0
};

let store = assign({}, BaseStoreMixin, {
  getState: () => state,
  isPending: () => state.pending
});

store.getIdentifiers = function (_repos) {
  return (_repos || []).map((repo) => { return repo.gitHubProjectId; });
};

store.hasDuplicates = function (_repos) {
  let duplicates = store.getIdentifiers(_repos).filter((id) => {
    return store.getIdentifiers(state.repos).indexOf(id) > -1;
  });
  return duplicates.length > 0 ? duplicates : false;
};

let languageNameExists = function(languages, languageName) {
  if (!languageName) {
    return false;
  }
  return languages.map((language) => {
      return language.name;
    }).indexOf(languageName) > -1;
};

let onLanguageChange = function (action) {
  state.pending = true;
  state.language = action.language;
  HashUtil.search('language', state.language);
  store.emitChange();


  return api.getRepos({
    language: state.language,
    limit: api.API_CONFIG.REPOS.DEFAULT_LIMIT,
    offset: 0
  })
  .then((repos) => {
    state.hasMore = true;
    state.page = 0;
    state.pending = false;
    state.repos = repos;
    store.emitChange();
    return repos;
  })
  .catch((error)=> {
    state.pending = false;
    log.error(error);
    store.emitChange();
  });
};

let onFetchInitialData = function (/*action*/) {
  state.pending = true;
  api
    .getLanguages()
    .then((languages) => {
      state.topLanguages = _.take(languages, 7);
      return state.topLanguages;
    })
    .then((topLanguages) => {
      if (languageNameExists(topLanguages, HashUtil.search('language'))) {
        state.language = HashUtil.search('language');
      }
      state.topLanguages = topLanguages;
      return state.language;
    })
    .then((language) => {
      return api.getRepos({
        language: language,
        limit: api.API_CONFIG.REPOS.DEFAULT_LIMIT,
        offset: 0
      }).then((repos) => {
        state.repos = repos;
        return repos;
      });
    })
    .then((repos) => {
      state.pending = false;
      store.emitChange();
      return repos;
    })
    .catch((error) => {
      log.error(error);
      state.pending = false;
      store.emitChange();
    });
};

let onFetchMore = function (action) {
  state.pending = true;
  let params = {
    limit: api.API_CONFIG.REPOS.DEFAULT_LIMIT,
    offset: action.page * api.API_CONFIG.REPOS.DEFAULT_LIMIT,
    language: action.language
  };
  api
    .getRepos(params)
    .then((_repos) => {
      state.pending = false;
      let newPage = params.offset / params.limit;

      if (state.language !== params.language) {
        state.repos = _repos;
        state.hasMore = true;
      } else {
        if (newPage === state.page) {
          log.warn('Page already added. aborting repo emit change.');
          return;
        }
        if (store.hasDuplicates(_repos)) {
          log.warn('Projects duplicates. aborting repo emit change.', {
            duplicates: store.hasDuplicates(_repos),
            allRepos: state.repos,
            page: state.page,
            newPage: newPage
          });
          state.page = newPage;
          return;
        }
        state.repos = state.repos.concat(_repos);
      }

      if (_repos.length < params.limit) {
        state.hasMore = false;
      }

      state.language = params.language;
      state.page = newPage;
      store.emitChange();
    })
    .catch((error) => {
      state.pending = false;
      state.hasMore = false;
      log.error(error);
      store.emitChange();
    });
};


store.dispatchToken = AppDispatcher.register(function (action) {
  switch (action.type) {
    case AppConstants.ActionTypes.REPOS_LANGUAGE_CHANGE:
      onLanguageChange(action);
      break;
    case AppConstants.ActionTypes.REPOS_FETCH_INITIAL_DATA:
      onFetchInitialData(action);
      break;
    case AppConstants.ActionTypes.REPOS_FETCH_MORE:
      onFetchMore(action);
      break;
    default:
      break;
  }
});

export default store;
