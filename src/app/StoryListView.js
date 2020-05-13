(function(exports) { 
  function StoryListView(list) {
    this.list = list
  }

  StoryListView.prototype.viewHeadlines = function() {
    console.log(this.list)
    var headlines = new Array();
    for (i=0; i < (this.list).length; i++) {
      headlines.push(this.list[i].headline)
    }
    return "<div><div class='list'><div class='story'><p>" + (headlines.join("</p></div></div><div class='list'><div class='story'><p>")) + "</p></div></div</div>"
  }


  exports.StoryListView = StoryListView
})(this)