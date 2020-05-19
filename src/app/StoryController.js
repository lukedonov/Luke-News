(function(exports) { 

  function StoryController() {
    const storyList = new StoryList()
    storyList.getStories()
    this.storyList = storyList.listOfStories
    this.storyListView = new StoryListView(this.storyList)
  }

  function showStory() {
    window.addEventListener("hashchange", showArticle);
  };

  function showArticle() {
    showNote(getNoteFromUrl(window.location));
  };
      
  function getNoteFromUrl(location) {
    return location.hash.split("#stories/")[1];
  };
        
  function showNote(story) {
    const article = controller.storyList[story]
    var summary = new ArticleSummary()
    summary.makeApiRequest(article.body)
  };

  showStory()
  exports.StoryController = StoryController
})(this)

controller = new StoryController()
