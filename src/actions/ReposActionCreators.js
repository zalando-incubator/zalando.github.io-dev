import AppDispatcher from '../dispatchers/AppDispatcher.js';
import ReposActionTypes from '../constants/ReposActionTypes.js';

let actions = {
  receiveRepos: function (repos) {
    AppDispatcher.dispatch({
      type: ReposActionTypes.RECEIVE_REPOS,
      repos: repos
    });
  }
};

export default actions;
