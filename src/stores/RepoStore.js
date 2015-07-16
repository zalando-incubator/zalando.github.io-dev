/**
 * Created by aigreja on 15/07/15.
 */
import EventEmitter from 'events';
import assign from 'object-assign';

let RepoStore = assign({}, EventEmitter.prototype, {
  getRepos: function() {
    return [
      {
        name: 'Lorem Ipsum',
        description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        primaryLanguage: 'java',
        forksCount: 30,
        starsCount: 40
      },
      {
        name: 'Lorem Ipsum',
        description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        primaryLanguage: 'javascript',
        forksCount: 30,
        starsCount: 40
      },
      {
        name: 'Lorem Ipsum',
        description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        primaryLanguage: 'go',
        forksCount: 30,
        starsCount: 40
      },
      {
        name: 'Lorem Ipsum',
        description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        primaryLanguage: 'java',
        forksCount: 30,
        starsCount: 40
      }
    ];
  }
});

module.exports = RepoStore;
