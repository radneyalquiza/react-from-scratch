import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

const app = express();

const server = http.createServer(app);

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
}

const port = process.env.PORT || 3000;

server.listen(port);
server.on('listening', () => {
  console.log(`server is listening on port: ${port}`);
});

app.get('*', (req, res) => {
  res.end('Hello Express');
});
