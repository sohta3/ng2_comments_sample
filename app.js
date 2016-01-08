var express = require('express');
var app = express();

app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));

app.get('/comments', function (req, res) {
  res.setHeader('Content-Type',  'application/json');
  res.json([{name: "Chris McCord"},   {name: "Matt Sears"},   {name: "David Stump"},   {name: "Ricardo Thompson"}]);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
