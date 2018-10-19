const request = require('supertest')
const server = require('../app');
const chai = require('chai');
const should = chai.should();

describe('expects 200', () => {
  it('GET / should 200 without error', function (done) {
    request(server)
      .get('/')
      .expect(200, done);
  })

  it('GET /products should 200 without error', function (done) {
    request(server)
      .get('/products')
      .expect(200, done);
  })

  it('GET /products/1 should 200 without error', function (done) {
    request(server)
      .get('/products/1')
      .expect(200, done);
  })

  it('POST /products should 200 without error', function (done) {
    request(server)
      .post('/products')
      .expect(200, done);
  })

  it('POST /products/1 should 200 without error', function (done) {
    request(server)
      .post('/products/1')
      .expect(200, done);
  })

  it('PUT /products should 200 without error', function (done) {
    request(server)
      .put('/products')
      .expect(200, done);
  })

  it('PUT /products/1 should 200 without error', function (done) {
    request(server)
      .put('/products/1')
      .expect(200, done);
  })

  it('DELETE /products should 200 without error', function (done) {
    request(server)
      .delete('/products')
      .expect(200, done);
  })

  it('DELETE /products/1 should 200 without error', function (done) {
    request(server)
      .delete('/products/1')
      .expect(200, done);
  })
})

describe('expects 404', () => {
  it('GET /login should 404 with error', function (done) {
    request(server)
      .get('/login')
      .expect(404, done);
  })

  it('POST /login should 404 with error', function (done) {
    request(server)
      .post('/login')
      .expect(404, done);
  })

  it('PUT /login should 404 with error', function (done) {
    request(server)
      .put('/login')
      .expect(404, done);
  })

  it('DELETE /login should 404 with error', function (done) {
    request(server)
      .delete('/login')
      .expect(404, done);
  })
})

describe('expects json', () => {
  it('GET / output json without error', function (done) {
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('GET / output json with correct value', function (done) {
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('get call succeed!')
        done()
      })
  })

  it('GET /products output json without error', function (done) {
    request(server)
      .get('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('GET /products output json with correct value', function (done) {
    request(server)
      .get('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('get call succeed!')
        done()
      })
  })

  it('GET /products/1 output json without error', function (done) {
    request(server)
      .get('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('GET /products/1 output json with correct value', function (done) {
    request(server)
      .get('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('get call succeed!')
        done()
      })
  })

  it('POST /products output json without error', function (done) {
    request(server)
      .post('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('POST /products output json with correct value', function (done) {
    request(server)
      .post('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('post call succeed!')
        done()
      })
  })

  it('POST /products/1 output json without error', function (done) {
    request(server)
      .post('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('POST /products/1 output json with correct value', function (done) {
    request(server)
      .post('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('post call succeed!')
        done()
      })
  })

  it('PUT /products output json without error', function (done) {
    request(server)
      .put('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('PUT /products output json with correct value', function (done) {
    request(server)
      .put('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('put call succeed!')
        done()
      })
  })

  it('PUT /products/1 output json without error', function (done) {
    request(server)
      .put('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('PUT /products/1 output json with correct value', function (done) {
    request(server)
      .put('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('put call succeed!')
        done()
      })
  })

  it('DELETE /products output json without error', function (done) {
    request(server)
      .delete('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('DELETE /products output json with correct value', function (done) {
    request(server)
      .delete('/products')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('delete call succeed!')
        done()
      })
  })

  it('DELETE /products/1 output json without error', function (done) {
    request(server)
      .delete('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.have.property('success');
        done()
      })
  })

  it('DELETE /products/1 output json with correct value', function (done) {
    request(server)
      .delete('/products/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.success.should.equal('delete call succeed!')
        done()
      })
  })
})

