function guardian() {
  return {
    key: process.env.API_KEY
  }
}

module.exports = {
  guardian: guardian
}