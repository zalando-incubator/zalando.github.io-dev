import EventEmitter from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let BaseStoreMixin = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

export default BaseStoreMixin;
