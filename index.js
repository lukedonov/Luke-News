const express = require('express');
const app = express();

require('dotenv').config()

console.log(process.env)

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

app.get('/api/stories', function(req, res) {

});

app.get('/src/app/StoryModel.js', function(req, res) {
  res.sendFile((__dirname + '/src/app/StoryModel.js'));
});

app.get('/src/app/StoryList.js', function(req, res) {
  require('dotenv').config()
  res.sendFile((__dirname + '/src/app/StoryList.js'));
});

app.get('/src/app/StoryListView.js', function(req, res) {
  res.sendFile((__dirname + '/src/app/StoryListView.js'));
});

app.get('/src/app/StoryController.js', function(req, res) {
  res.sendFile((__dirname + '/src/app/StoryController.js'));
});

app.get('/src/app/ArticleSummary.js', function(req, res) {
  res.sendFile((__dirname + '/src/app/ArticleSummary.js'));
});

app.get('/stylesheet.css', function(req, res) {
  res.sendFile((__dirname + '/stylesheet.css'));
});
