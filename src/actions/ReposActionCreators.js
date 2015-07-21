import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

let actions = {
  receiveRepos: function (repos) {
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.RECEIVE_REPOS,
      repos: repos
    });
  }
};

export default actions;
