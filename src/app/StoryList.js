function StoryList() {
  this.listOfStories = []
}

StoryList.prototype.addStory = function(storyModel) {
  this.listOfStories.push(storyModel)
}

StoryList.prototype.getStories = function() {
  const fetchPromise = fetch('https://content.guardianapis.com/search?api-key=70163cb6-b815-4de0-aa0a-7438a67f0243');
  fetchPromise.then(response => {
    return response.json();
  }).then(stories => {
    // console.log(this.listOfStories)
    // console.log(stories.response.results)
    for(i = 0; i < 10; i++) {
      var story = stories.response.results[i]
      this.addStory(new StoryModel(story.webTitle, story.webUrl))
    }
  })
}
