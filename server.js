var PORT = process.env.PORT || 8080;
var express = require('express');

var app = express();
app.use(app.router);

app.get('/', function(req, res) {
  res.send("Welcome to underground");
});

app.listen(PORT);
