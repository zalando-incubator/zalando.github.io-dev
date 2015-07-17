import api from './api.js';
import chai from 'chai';
import spies from 'chai-spies';
import API_CONFIG from '../constants/api-config.js';
import promiseMock from './promise-mock.js';


chai.use(spies);

let expect = chai.expect;

(function () {


  let httpBackend;
  //let http;

  function q(result) {
    return new Promise(function(resolve) {
      resolve(result);
    });
  }

  describe('api', function () {

    beforeEach(function () {
      httpBackend = {
        'get' : function (/*config*/) {
          return q({
            // `data` is the response that was provided by the server
            data : {},

            // `status` is the HTTP status code from the server response
            status: 200,

            // `headers` the headers that the server responded with
            headers: {},

            // `config` is the config that was provided to `axios` for the request
            config: {}
          });
        }
      };

      // inject a fake httpBackend
      api()._http(api()._http().setBackend(function (config) {
        return httpBackend[config.method](config);
      }));

    });

    it('should provide a configured resource', function() {
      expect(api.baseUrl()).to.equal(API_CONFIG.BASE_URL);
      expect(api.protocol()).to.equal(API_CONFIG.PROTOCOL);
      expect(api.url()).to.equal(API_CONFIG.PROTOCOL + '://' + API_CONFIG.BASE_URL)
    });
  });


})();


