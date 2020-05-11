function StoryList() {
  this.listOfStories = []
}

StoryList.prototype.addStory = function(storyModel) {
  this.listOfStories.push(storyModel)
}