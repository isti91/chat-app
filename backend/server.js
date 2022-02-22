var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
      methods: ["GET", "POST"]
    }
  });

io.on('connection', (socket) => {
    console.log('frontend connected');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message-broadcast', msg);
       });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});