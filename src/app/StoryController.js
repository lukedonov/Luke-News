(function(exports) { 

  function StoryController() {
    // this.request = new ApiRequest
    const storyList = new StoryList()
    storyList.getStories()
    this.storyList = storyList.listOfStories
    this.storyListView = new StoryListView(this.storyList)
  }

  StoryController.prototype.outputToHtml = function() {
    return document.getElementById("stories").innerHTML = this.storyListView.viewHeadlines();
  }

  exports.StoryController = StoryController
})(this)

controller = new StoryController()
controller.outputToHtml()
