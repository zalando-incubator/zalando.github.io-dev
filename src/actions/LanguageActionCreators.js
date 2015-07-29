import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';

let actions = {
  receiveLanguages: function (languages) {
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.RECEIVE_LANGUAGES,
      languages: languages
    });
  }
};

export default actions;
