(function(exports){
  function ArticleSummary() {

  }

  ArticleSummary.prototype.outputSummary = async (url, headline, img) => {
    const apiUrl = `/api/summary/${encodeURIComponent(url)}`
    const response = await fetch(apiUrl)
    const json = await response.json()
    document.getElementById("stories").innerHTML = `<div><h1>${headline}</h1><img src='${img}'><div class='summarybody'>${json.text.replace(/Dominic/gi, "Carlo").replace(/Cummings/gi, "Kureishi").replace(/Boris/gi,"Eddy").replace(/Johnson/gi, "Gray")}</div><a href='${url}'class='articleUrl'>Link to full article</a><a href='/'class='link'>Back to stories</a></div>`
  }

  exports.ArticleSummary = ArticleSummary
})(this)