# sample-expressjs-microservice

[![Build Status](https://travis-ci.org/ykbryan/sample-expressjs-microservice.svg?branch=master)](https://travis-ci.org/ykbryan/sample-expressjs-microservice) [![Coverage Status](https://coveralls.io/repos/github/ykbryan/sample-expressjs-microservice/badge.svg?branch=master)](https://coveralls.io/github/ykbryan/sample-expressjs-microservice?branch=master) [![Dependencies](https://david-dm.org/ykbryan/sample-expressjs-microservice/status.svg)](https://david-dm.org/ykbryan/sample-expressjs-microservice/status.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/ykbryan/sample-expressjs-microservice/compare?expand=1)


### Frameworks/services added

* [ExpressJS](https://expressjs.com)
* [MachaJS](https://mochajs.org)
* [Travis CI](https://travis-ci.org/)
* [Coveralls.io](https://coveralls.io/)

### URLs to use

**GET** /
**GET/POST/PUT/DELETE** /products

### Sample JSON Result for GET /

```
{
  "success": "get call succeed!",
  "url": "/"
}
```
### To start

Run `npm start` in your *terminal*

### To run in docker

`docker run -it --rm -p 3000:3000 bryanchua/sample-expressjs-microservice:latest`

## References

[Docker Hub](https://hub.docker.com/r/bryanchua/sample-expressjs-microservice/)
[Docker Docs](https://docs.docker.com/get-started/part2/#run-the-app)
