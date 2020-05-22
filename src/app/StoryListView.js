(function(exports) { 

  function StoryListView(list) {
    this.list = list
  }

  StoryListView.prototype.viewHeadlines = function() {
    var string = ''
    var buttons = `<div class='buttons'><button id='nextPage' value='helo'>Next page</button></div>`
    this.list.map(article => string += `<a href='#stories/${article.id}'><div class='story'><p>${article.headline}</p><div class='imgplaceholder' ><img id='thumbnail' src='${article.thumbnailUrl}'></div></div></a>`)
    return string + buttons
  }

  StoryListView.prototype.viewArticle = function() {
    var string = ''
    this.list.map(article => string += `<div class='articleHeadline'>${article.headline}</div><div class='articleImg'><img src='${article.thumbnailUrl}'></div>`)
    return string
  }


  exports.StoryListView = StoryListView
})(this)