(function(exports) { 

  function StoryController() {
    const storyList = new StoryList()
    storyList.getStories()
    this.storyList = storyList.listOfStories
    this.storyListView = new StoryListView(this.storyList)
  }

  exports.StoryController = StoryController
})(this)

controller = new StoryController()
