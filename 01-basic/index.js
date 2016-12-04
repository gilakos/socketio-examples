//Express initializes app to be a function handler that you can supply to an HTTP server.
var app = require('express')();
//Create an HTTP server.
var http = require('http').Server(app);

//We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

//We make the http server listen on port 3000.
http.listen(3000, function(){
  console.log('listening on *:3000');
});