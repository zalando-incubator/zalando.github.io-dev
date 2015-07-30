import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';

let actions = {
  receiveRepos: function (repos, params) {
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.RECEIVE_REPOS,
      repos: repos,
      params: params
    });
  }
};

export default actions;
