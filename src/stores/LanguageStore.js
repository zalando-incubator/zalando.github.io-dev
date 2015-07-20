/**
 * Created by aigreja on 15/07/15.
 */
import EventEmitter from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import ReposActionTypes from '../constants/ReposActionTypes.js';
import languagesUtil from '../utils/LanguagesUtil.js';

const CHANGE_EVENT = 'change';

var languages = [];

let LanguageStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getLanguages: function() {
    return languages;
  }
});

LanguageStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ReposActionTypes.RECEIVE_REPOS:
      languages = languagesUtil.guessLanguages(action.repos);
      LanguageStore.emitChange();
      break;

    default:
    // do nothing
  }
});

module.exports = LanguageStore;
