const express = require('express');
const app = express();
var router = require('./src/app/routeHandlers')
var requester = require('./src/app/ApiRequester')


require('dotenv').config()

const fetch = require("node-fetch")
const http = require('http');
const server = http.createServer();
server.on('request', (app)); 

app.get('/', function(req, res) {
  res.sendFile((__dirname + '/index.html'));
});

app.get('/api/stories', async (req, res) => {
  const apiUrl = 'https://content.guardianapis.com/search?api-key=' + process.env.API_KEY
  const fetchResponse = await fetch(apiUrl)
  const json = await fetchResponse.json()
  res.json(json)
});

app.get('/api/:url', async (req, res) => {
  console.log(req.params)
  const apiUrl = 'http://api.meaningcloud.com/summarization-1.0?key=' + process.env.SUMMARY_KEY + '&url=' + req.params.url + "&sentences=10"
  // const apiUrl = 'http://api.meaningcloud.com/summarization-1.0?key=0bf7073346b1a790bab2a9fbb2e099db&url=https://www.theguardian.com/global-development/2020/may/15/west-africa-facing-food-crisis-as-coronavirus-spreads&sentences=10'
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
