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
    return "<ul><li><div>" + (headlines.join("</div></li><li><div>")) + "</div></li></ul>"
  }


  exports.StoryListView = StoryListView
})(this)