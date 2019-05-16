const express = require('express');
require('env');

// declare a new express app
const app = express();
const port = 3000;

// Enable CORS for all methods
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Example get method

app.get('/', (req, res) => {
  // Add your code here
  // Return the API Gateway event and query string parameters for example
  res.json({ success: 'get call succeed!', url: req.url, service: process.env.SERVICENAME });
});

app.get('/products', (req, res) => {
  // Add your code here
  // Return the API Gateway event and query string parameters for example
  res.json({ success: 'get call succeed!', url: req.url, service: process.env.SERVICENAME });
});

app.get('/products/*', (req, res) => {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url, service: process.env.SERVICENAME });
});

// Example post method

app.post('/products', (req, res) => {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, service: process.env.SERVICENAME, body: req.body });
});

app.post('/products/*', (req, res) => {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, service: process.env.SERVICENAME, body: req.body });
});

// Example put method

app.put('/products', (req, res) => {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, service: process.env.SERVICENAME, body: req.body });
});

app.put('/products/*', (req, res) => {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, service: process.env.SERVICENAME, body: req.body });
});

// Example delete method

app.delete('/products', (req, res) => {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url, service: process.env.SERVICENAME });
});

app.delete('/products/*', (req, res) => {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url, service: process.env.SERVICENAME });
});

const server = app.listen(port, () => {
  console.log('App started');
});

// Export the app object.
module.exports = server;
