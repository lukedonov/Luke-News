(function(exports){
  function ArticleSummary() {

  }

  ArticleSummary.prototype.makeApiRequest = async (url) => {
    const apiUrl = `/api/summary/${encodeURIComponent(url)}`
    const response = await fetch(apiUrl)
    const json = await response.json()
    document.getElementById("stories").innerHTML = `<div class='summarybody'>${json.summary}</div><a href='${url}'class='articleUrl'>Link to full article</a>`
  }

  exports.ArticleSummary = ArticleSummary
})(this)