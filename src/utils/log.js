let log = function (method, ...args) {
  /* eslint-disable no-console */
  if (console && console[method]) {
    return console[method].apply(console, args);
  }
  /* eslint-enable no-console */
};

log.log = function (...args) {
  args.unshift('log');
  log.apply(null, args);
};

log.debug = function (...args) {
  args.unshift('debug');
  log.apply(null, args);
};

log.info = function (...args) {
  args.unshift('info');
  log.apply(null, args);
};

log.error = function (...args) {
  args.unshift('error');
  log.apply(null, args);
};

log.warn = function (...args) {
  args.unshift('warn');
  log.apply(null, args);
};

export default log;
