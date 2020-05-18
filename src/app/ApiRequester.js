var credentials = require('./Credentials')
const fetch = require("node-fetch")

module.exports = function guardianRequest(){
  const fetchPromise = fetch('https://content.guardianapis.com/search?api-key=70163cb6-b815-4de0-aa0a-7438a67f0243');
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