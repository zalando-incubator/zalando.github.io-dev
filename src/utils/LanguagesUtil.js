import _ from 'lodash';
import COLORS from '../constants/LanguageColors.js';

export default {

  addMetadata: function (languages) {
    // add percentage and color
    languages.forEach(function (language) {
      for (let property in COLORS) {
        if (property === language.name) {
          language.color = COLORS[property];
        }
      }

      if (!language.color) {
        language.color = COLORS.DEFAULT;
      }
    });

    return languages;
  },
  /**
   * Extract programming languages and attach "metadata"
   *
   * @param {Array} repos
   * @returns {Array} - languages with count/percentage/color, ordered by count
   */
  guessLanguages: function (repos) {

    // extract languages from repos
    let languages = this.getLanguagesFromRepos(repos);

    // sort by
    languages = _.sortByOrder(languages, function (language) {
      return language.count;
    }, ['desc']);

    // add percentage and color
    languages.forEach(function (language) {
      language.percentage = Math.round( ( language.count / repos.length) * 100 );

      for (let property in COLORS) {
        if (property === language.name) {
          language.color = COLORS[property];
        }
      }

      if (!language.color) {
        language.color = COLORS.DEFAULT;
      }
    });

    return languages;
  },
  /**
   * Extract/aggregates programming languages
   *
   * @param {Array} repos
   * @returns {Array}
   */
  getLanguagesFromRepos: function (repos) {
    return repos.reduce(function (langs, repo) {
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
  },
  getLanguageColor: function (languageName) {
    return COLORS[languageName] || COLORS.DEFAULT;
  }
};
