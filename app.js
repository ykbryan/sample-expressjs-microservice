const express = require('express');

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
  res.json({ success: 'get call succeed!', url: req.url });
});

app.get('/products', (req, res) => {
  // Add your code here
  // Return the API Gateway event and query string parameters for example
  res.json({ success: 'get call succeed!', url: req.url });
});

app.get('/products/*', (req, res) => {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

// Example post method

app.post('/products', (req, res) => {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

app.post('/products/*', (req, res) => {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

// Example put method

app.put('/products', (req, res) => {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

app.put('/products/*', (req, res) => {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

// Example delete method

app.delete('/products', (req, res) => {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('/products/*', (req, res) => {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

const server = app.listen(port, () => {
  // console.log('App started');
});

// Export the app object.
module.exports = server;
