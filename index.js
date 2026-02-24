const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', socket => {
  console.log('User connected:', socket.id);

  socket.on('join', ({ username }) => {
    socket.username = username;
    console.log(`-> ${username} joined (socket id: ${socket.id})`);
    io.emit('system', `${username} joined the chat`);
  });

  // When a client sends a message, broadcast it to all OTHER clients
  socket.on('send', msg => {
    // debug log
    console.log(`Received message from ${socket.username || socket.id}: ${msg}`);

    // require username
    if (!socket.username) {
      console.log('-> send ignored: username not set for socket', socket.id);
      return;
    }

    // send to everyone except the sender (so sender shows its local copy)
    socket.broadcast.emit('message', { user: socket.username, text: msg });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id, 'username:', socket.username);
    io.emit('system', `${socket.username || 'Someone'} left the chat`);
  });
});

app.get('/', (req, res) => res.json({ ok: true }));

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
