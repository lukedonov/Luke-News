function StoryList() {
  this.listOfStories = []
}

StoryList.prototype.addStory = function(storyModel) {
  this.listOfStories.push(storyModel)
}

StoryList.prototype.getStories = function() {
  for(i = 0; i < 10; i++) {
    this.addStory(new StoryModel('headline','body'))
  }
}