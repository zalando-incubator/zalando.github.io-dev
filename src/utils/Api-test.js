import api from './Api.js';
import {expect} from 'chai';
import API_CONFIG from '../constants/ApiConfig.js';

(function () {

  describe('api', function () {
    it('should provide a configured resource', function() {
      expect(api.baseUrl()).to.equal(API_CONFIG.BASE_URL);
      expect(api.protocol()).to.equal(API_CONFIG.PROTOCOL);
      expect(api.url()).to.equal(API_CONFIG.PROTOCOL + '://' + API_CONFIG.BASE_URL)
    });
  });

})();


