import api from './api.js';
import {expect} from 'chai';
import API_CONFIG from '../constants/api-config.js';

(function () {


  //let httpBackend;
  //let http;

  //function q(result) {
  //  return new Promise(function(resolve) {
  //    resolve(result);
  //  });
  //}

  describe('api', function () {
    it('should provide a configured resource', function() {
      expect(api.baseUrl()).to.equal(API_CONFIG.BASE_URL);
      expect(api.protocol()).to.equal(API_CONFIG.PROTOCOL);
    });
  });


})();


