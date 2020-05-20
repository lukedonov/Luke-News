(function(exports){
  function ArticleSummary() {

  }

  ArticleSummary.prototype.makeApiRequest = async (url, headline, img) => {
    const apiUrl = `/api/summary/${encodeURIComponent(url)}`
    const response = await fetch(apiUrl)
    const json = await response.json()
    document.getElementById("stories").innerHTML = `<div><h1>${headline}</h1><img src='${img}'><div class='summarybody'>${json.summary}</div><a href='${url}'class='articleUrl'>Link to full article</a></div>`
  }

  exports.ArticleSummary = ArticleSummary
})(this)