import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';


let actions = {
  fetchInitialData: function () {
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.REPOS_FETCH_INITIAL_DATA
    });
  },
  languageChange: function (language) {
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.REPOS_LANGUAGE_CHANGE,
      language: language
    });
  },
  fetchMore: function (page, language) {
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.REPOS_FETCH_MORE,
      page: page,
      language: language
    });
  }
};

export default actions;
