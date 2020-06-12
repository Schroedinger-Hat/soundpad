const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(INDEX, { root: __dirname }));
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
    
    socket.on('play-audio', function (src) {
        io.emit('play-audio', src);
    });
    
    socket.on('stop-audio', function () {
        io.emit('stop-audio', new Date().toTimeString());
    });
});
