(function(exports) { 

  function StoryListView(list) {
    this.list = list
  }

  StoryListView.prototype.viewHeadlines = function() {
    var string = ''
    this.list.map(article => string += `<a href='#stories/${this.list.indexOf(article)}'><div class='story'><p>${article.headline}</p><div class='imgplaceholder' ><img id='thumbnail' src='${article.thumbnailUrl}'></div></div></a>`)
    return string
  }

  StoryListView.prototype.viewArticle = function() {
    var string = ''
    this.list.map(article => string += `<div class='articleHeadline'>${article.headline}</div><div class='articleImg'><img src='${article.thumbnailUrl}'></div>`)
    return string
  }


  exports.StoryListView = StoryListView
})(this)