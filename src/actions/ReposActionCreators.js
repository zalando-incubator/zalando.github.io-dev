import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.jsx';

let actions = {
  receiveRepos: function (repos) {
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.RECEIVE_REPOS,
      repos: repos
    });
  },

  /**
   *
   * @param repos new page
   * @param limit
   * @param offset
   */
  receiveReposByPage: function (repos, limit) {
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.RECEIVE_REPOS_PAGE,
      repos: repos,
      limit: limit
    });
  }
};

export default actions;
