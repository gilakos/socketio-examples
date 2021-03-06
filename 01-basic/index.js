//Express initializes app to be a function handler that you can supply to an HTTP server.
var app = require('express')();
//Create an HTTP server.
var http = require('http').Server(app);
//Create instance of socket
var io = require('socket.io')(http);

//We define a route handler / that gets called when we hit our website home.
app.get('/', function (req, res) {
    //res.send('<h1>Hello world</h1>');
    //Let’s refactor our route handler to use sendFile instead:
    res.sendFile(__dirname + '/index.html');
});

//Listen on the connection event for incoming sockets, and log it to the console.
io.on('connection', function (socket) {
    //print out the connection event to the server
    //console.log('a user connected');
    //print out the chat message event
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        //emit the message to all sockets, including the sender
        io.emit('chat message', msg);
    });
});


//We make the http server listen on port 3000.
http.listen(3000, function () {
    console.log('listening on *:3000');
});
