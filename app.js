var express = require('express'),
  fs      = require('fs');

var app = express();
app.use("/lib", express.static(__dirname + '/lib'));
app.get('/', function(req, response){
  var data = fs.readFileSync('index.html').toString();
  response.send(data)
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});