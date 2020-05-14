const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer();
server.on('request', (app)); 
//const server = require('http').createServer(app);

server.listen(8080, 'localhost', function () {
  console.log('Server listening on port 8080')
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

