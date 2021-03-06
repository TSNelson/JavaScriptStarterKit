// Express Dist Server Build Script - Test production build locally

/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'; // this gzip compression is not working

const appFilepath = path.join(__dirname, '../dist/index.html');
const port = 3000;
const app = express();

// Middleware

  // Compress responses
app.use(compression());
  // Serve static HTML
app.use(express.static('dist'));

// Routes
app.get('/', function(req, res) {
  res.sendFile(appFilepath);
});

/* Disabled route for serving static JSON data
app.get('/users', function(req, res) {
  // Used to mock a call to an API
  res.json([
    {"id":1, "firstName":"Bob", "lastName":"Jones", "email": "b.jones@example.com"},
    {"id":2, "firstName":"Alice", "lastName":"Baker", "email": "a.baker@example.com"},
    {"id":3, "firstName":"Ray", "lastName":"Smith", "email": "r.smith@example.com"}
  ]);
});
//*/

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
