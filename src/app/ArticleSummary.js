(function(exports){

  function ArticleSummary() { }

  ArticleSummary.prototype.makeApiRequest = function(url) {
    const fetchPromise = fetch("http://api.meaningcloud.com/summarization-1.0?key=&url=" + url + "&sentences=5" );
    fetchPromise.then(response => {
      return response.json();
    }).then(summary => {
      console.log(summary)
      document.getElementById("stories").innerHTML = summary.summary
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });
  }

  exports.ArticleSummary = ArticleSummary
})(this)