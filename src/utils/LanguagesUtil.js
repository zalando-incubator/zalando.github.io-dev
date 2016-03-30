import _ from 'lodash';
import COLORS from '../constants/LanguageColors.js';

export default {
  /**
   * Apply some extra metadata to each language (color, ...)
   * @param {Array} languages
   * @returns {Array}
   */
  addMetadata: function (languages) {
    languages.forEach(function (language) {
      language.color = this.getColorMetadata(language);
    }.bind(this));

    return languages;
  },
  /**
   * Get the hex color for a programming language
   * @param {object} language
   * @returns {string}
   */
  getColorMetadata: function (language) {
    let color;

    for (let languageName in COLORS) {
      if (COLORS.hasOwnProperty(languageName)) {
        if (languageName === language.name) {
          color = COLORS[languageName];
        }
      }
    }

    if (!color) {
      color = COLORS.DEFAULT;
    }
    return color;
  },
  /**
   * Extract programming languages and attach "metadata"
   *
   * @deprecated now we get languages from the REST API
   * @param {Array} repos
   * @returns {Array} - languages with count/percentage/color, ordered by count
   */
  guessLanguages: function (repos) {

    // extract languages from repos
    let languages = this.getLanguagesFromRepos(repos);

    // sort by
    languages = _.orderBy(languages, function (language) {
      return language.count;
    }, ['desc']);

    // add percentage and color
    languages.forEach(function (language) {
      language.percentage = Math.round( ( language.count / repos.length) * 100 );
      language.color = this.getColorMetadata(language);
    }.bind(this));

    return languages;
  },
  /**
   * Extract/aggregates programming languages
   *
   * @deprecated now we get languages from the REST API
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
