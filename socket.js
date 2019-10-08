const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io');

server.listen(4000);

const ws = io.listen(server);
let counter = 0;
ws.on('connection',(socket)=>{
    counter++;
    ws.sockets.emit('ping', { counter });
    socket.on('disconnect', function () {
        --counter;
        ws.sockets.emit('ping', { counter });
    });

});
