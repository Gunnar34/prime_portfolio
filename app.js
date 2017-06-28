var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3004;
var credentials = require('./config');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function() {
  console.log('up 3004');
});

app.get('/access', function(req, res){
  res.send(credentials);
});
