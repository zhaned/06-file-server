const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/' && request.method === 'GET'){
      socket.end(createResponse({
        body: 'hi'
      }));
    } else if(request.path === '/echo' && request.method === 'POST'){
      socket.end(createResponse({
        status: '200 OK',
        body: request.body,
      }));
    } else if(request.path === '/red' && request.method === 'GET'){
      socket.end(createResponse({
        body: '<h1>red</h1>'
      }));
    } else if(request.path === '/green' && request.method === 'GET'){
      socket.end(createResponse({
        body: '<h1>green</h1>'
      }));
    } else if(request.path === '/blue' && request.method === 'GET'){
      socket.end(createResponse({
        body: '<h1>blue</h1>'
      }));
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
