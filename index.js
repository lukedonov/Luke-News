const express = require('express');
const app = express();
var router = require('./src/app/routeHandlers')
var requester = require('./src/app/ApiRequester')


require('dotenv').config()

const fetch = require("node-fetch")
const http = require('http');
const server = http.createServer();
server.on('request', (app)); 

app.get('/api/stories', async (req, res) => {
  const apiUrl = 'https://content.guardianapis.com/search?api-key=' + process.env.API_KEY
  const fetchResponse = await fetch(apiUrl)
  const json = await fetchResponse.json()
  res.json(json)
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

server.listen(8080, 'localhost', function () {
  console.log('Server listening on port 8080')
})
