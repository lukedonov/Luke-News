(function(exports){

  function ArticleSummary() { }

  ArticleSummary.prototype.makeApiRequest = async (url) => {
    const apiUrl = `/api/summary/${encodeURIComponent(url)}`
    const response = await fetch(apiUrl)
    const json = await response.json()
    document.getElementById("stories").innerHTML = json.summary
  }

  exports.ArticleSummary = ArticleSummary
})(this)