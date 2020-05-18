var credentials = require('./Credentials')
const fetch = require("node-fetch")

module.exports = function guardianRequest(){
  const fetchPromise = fetch('/api/stories');
  fetchPromise.then(response => {
    return response.json();
  }).then(stories => {
    // console.log('hello from stories')
    console.log(stories.response)
    return stories.response.results
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}