import assign from 'object-assign';
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';
import languagesUtil from '../utils/LanguagesUtil.js';
import BaseStoreMixin from './BaseStoreMixin.js';

let languages = [];

let LanguageStore = assign({}, BaseStoreMixin, {
  getLanguages: function() {
    return languages;
  }
});

LanguageStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case AppConstants.ActionTypes.RECEIVE_REPOS:
      languages = languagesUtil.guessLanguages(action.repos);
      LanguageStore.emitChange();
      break;

    default:
    // do nothing
  }
});

module.exports = LanguageStore;
