const request = require('supertest')
const server = require('../app');

describe('expects 200', () => {
  it('/ should 200 without error', function (done) {
    request(server)
      .get('/')
      .expect(200, done);
  })

  it('/products should 200 without error', function (done) {
    request(server)
      .get('/')
      .expect(200, done);
  })
})

describe('expects 404', () => {
  it('/login should 404 with error', function (done) {
    request(server)
      .get('/login')
      .expect(404, done);
  })

  it('/products should 200 without error', function (done) {
    request(server)
      .get('/')
      .expect(200, done);
  })
})

describe('expects json', () => {
  it('/products should 200 without error', function (done) {
    request(server)
      .get('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      });
  })
})

