// Express build script
import express from 'express';
import path from 'path';
import open from 'open';

const appFilepath = path.join(__dirname, '../src/index.html');
const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(appFilepath);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
