import queryString from 'query-string';

export default {
  search: function (name, value) {
    let hash = window.location.hash;

    if (!hash) { return null; }

    if (value) {
      let match = hash.match(/^(#.*)\?.*$/);
      if (match && match.length === 2) {
        window.location.hash = match[1] + '?' + queryString.stringify({ [name]: value });
        return null;
      }
      window.location.hash = window.location.hash + '?' + queryString.stringify({ [name]: value });
      return null;
    }

    let match = hash.match(/\?.*$/);
    if (match && match[0]) {
      let params = queryString.parse(match[0]);
      if (params[name]) {
        return params[name];
      }
    }
  }
};
