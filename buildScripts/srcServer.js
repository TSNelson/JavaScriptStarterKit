// Express Development Server Build Script

/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const appFilepath = path.join(__dirname, '../src/index.html');
const port = 3000;
const app = express();
const compiler = webpack(config);

// Instructs Express to use Webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(appFilepath);
});

app.get('/users', function(req, res) {
  // Used to mock a call to an API
  res.json([
    {"id":1, "firstName":"Bob", "lastName":"Jones", "email": "b.jones@example.com"},
    {"id":2, "firstName":"Alice", "lastName":"Baker", "email": "a.baker@example.com"},
    {"id":3, "firstName":"Ray", "lastName":"Smith", "email": "r.smith@example.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
