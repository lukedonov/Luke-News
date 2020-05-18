(function(exports){

  function ArticleSummary() { }

  // ArticleSummary.prototype.makeApiRequest = function(url) {
  //   const fetchPromise = fetch(`/api/hello`);
  //   fetchPromise.then(response => {
  //     return response.json()
  //   }).then(summary => {
  //     console.log(summary)
  //     document.getElementById("stories").innerHTML = summary.summary
  //   }).catch(function (error) {
  //     console.warn('Something went wrong.', error);
  //   });
  // }

  ArticleSummary.prototype.makeApiRequest = async (url) => {
    const apiUrl = `/api/${encodeURIComponent(url)}`
    const response = await fetch(apiUrl)
    const json = await response.json()
    document.getElementById("stories").innerHTML = json.summary
  }

  exports.ArticleSummary = ArticleSummary
})(this)