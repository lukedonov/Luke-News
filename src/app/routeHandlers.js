var apiRequest = require('./ApiRequester')

function guardian() {
  apiRequest.guardianRequest()
};

function reportError(response, message) {
  response.json({ error: message });
};


module.exports = {
  guardian: guardian
}