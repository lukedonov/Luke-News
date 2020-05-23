(function(exports) { 

  function StoryController() {
    this.storyList = new StoryList()
    this.storyList.getStories()
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
    const article = controller.storyList.listOfStories[story]
    var summary = new ArticleSummary()
    console.log(controller)
    summary.outputSummary(article.body, article.headline, article.thumbnailUrl)
  };

  function showNextPage() {
    var click = document.getElementById("nextPage") 
    click.addEventListener('click', changePage)
  };

  function changePage() {
    controller.storyList.nextPage();
    console.log('clicked')
    controller.storyList.getStories()
  }

  
  showNextPage()
  showStory()
  exports.StoryController = StoryController
})(this)

var controller = new StoryController()
