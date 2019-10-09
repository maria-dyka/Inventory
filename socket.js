const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io');

server.listen(4000, () => {
    // eslint-disable-next-line no-console
    console.log('Listening. Port 4000');
});

const ws = io.listen(server);
let counter = 0;
ws.on('connection',(socket)=>{
    counter++;
    // eslint-disable-next-line no-console
    console.log(`A tab opened. Opened tabs: ${counter}`);
    ws.sockets.emit('ping', { counter });
    socket.on('disconnect', function () {
        --counter;
        // eslint-disable-next-line no-console
        console.log(`A tab closed. Opened tabs: ${counter}`);
        ws.sockets.emit('ping', { counter });
    });

});
