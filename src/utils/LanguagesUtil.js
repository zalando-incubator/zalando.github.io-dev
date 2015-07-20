import _ from 'lodash';

export default {
  /**
   * Extract programming languages data
   *
   * @param {Array} repos
   * @returns {Array} - array used languages with count and percentage, ordered by count
   */
  guessLanguages: function (repos) {

    // extract languages from repos
    let languages = repos.reduce(function (langs, repo) {
      let found = false;
      for (var i = 0; i < langs.length; i++) {
        if (repo.primaryLanguage === langs[i].name) {
          found = true;
          langs[i].count = langs[i].count + 1;
          break;
        }
      }

      if (!found) {
        langs.push({name: repo.primaryLanguage, count: 1});
      }
      return langs;
    }, []);

    // sort by
    languages = _.sortByOrder(languages, function (language) {
      return language.count;
    }, ['desc']);

    // add percentage
    languages.forEach(function (language) {
      language.percentage = Math.round( ( language.count / repos.length) * 100 );
    });
    return languages;
  }
};
