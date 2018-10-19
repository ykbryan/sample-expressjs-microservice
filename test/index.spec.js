const request = require('supertest')
const server = require('../app');
const chai = require('chai');
const should = chai.should();

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
})

describe('expects json', () => {
  it('/products output json without error', function (done) {
    request(server)
      .get('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('/products output json with correct value', function (done) {
    request(server)
      .get('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('get call succeed!')
        done()
      })
  })

  it('/products/1 output json without error', function (done) {
    request(server)
      .get('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('/products/1 output json with correct value', function (done) {
    request(server)
      .get('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('get call succeed!')
        done()
      })
  })
})

