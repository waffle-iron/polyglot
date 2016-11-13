var app = require('../../server/server');
var expect = require('chai').expect;
var request = require('request');

describe('API tests', function() {
  it('Should respond to a GET request to /api/users with a 200 status', function(done) {
    request('http://127.0.0.1:8000/api/users', function(err, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  
  it('Should POST data to /api/users', function(done) {
    var reqParams = {
      uri: 'http://127.0.0.1:8000/api/users',
      method: 'POST',
      json: {
        first_name: 'Marcus',
        last_name: 'Garvey',
        email: 'marcus.garvey@gmail.com',
        facebook_id: '1234'
      }
    };
    request(reqParams, function(err, response, body) {
      expect(response.statusCode).to.equal(200);
      // expect(body.first_name).to.equal('Marcus');
      done();
    });
  });
  
  it('Should POST data to /api/sessions/:language', function(done) {
    var reqParams = {
      uri: 'http://localhost:8000/api/sessions/spanish',
      method: 'POST',
      json: {
        user_id: '1234',
        teacher: false
      }
    };
    request(reqParams, function(err, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

