const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const fs = require('fs').promises;

const app = net.createServer((socket) => {
  socket.on('data', (data) => {
    const { method, path } = parseRequest(data.toString());

    if(method === 'GET') {
      fs.readFile(`./public/${path}`, 'utf-8')
        .then((data) => socket.end(createResponse({ body: data })))
        .catch((err) => {
          socket.end(
            createResponse({
              body: 'Not Found',
              status: '404 Not Found',
              contentType: 'text/plain',
            })
          );
        });
    }
  });
});

module.exports = app;
