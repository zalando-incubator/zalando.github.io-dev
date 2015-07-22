import assign from 'object-assign';
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';
import languagesUtil from '../utils/LanguagesUtil.js';
import BaseStoreMixin from './BaseStoreMixin.js';
import _ from 'lodash';

//top languages are the top five most used
let TOP_LANGUAGES_COUNT = 5;

let languages = [];
let topLanguages = [];

let LanguageStore = assign({}, BaseStoreMixin, {
  getLanguages: function() {
    return languages;
  },

  getTopLanguages: function() {
    return topLanguages;
  }
});

LanguageStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case AppConstants.ActionTypes.RECEIVE_REPOS:
      languages = languagesUtil.guessLanguages(action.repos);
      //languages is ordered by popularity
      topLanguages = _.take(languages, TOP_LANGUAGES_COUNT);
      LanguageStore.emitChange();
      break;

    default:
    // do nothing
  }
});

module.exports = LanguageStore;
