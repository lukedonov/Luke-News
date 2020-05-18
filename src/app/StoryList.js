(function(exports) { 

  function StoryList() {
    this.listOfStories = []
    this.storyListView = new StoryListView(this.listOfStories)
  }

  StoryList.prototype.addStory = function(storyModel) {
    this.listOfStories.push(storyModel)
  }

  StoryList.prototype.getStories = function() {
    const fetchPromise = fetch('/api/stories');
    fetchPromise.then(response => {
      return response.json();
    }).then(stories => {
      console.log(stories.response.results[0].apiUrl)
      for(i = 0; i < 10; i++) {
        var story = stories.response.results[i]
        this.addStory(new StoryModel(story.webTitle, story.webUrl,i))
      }
      document.getElementById("stories").innerHTML = this.storyListView.viewHeadlines()
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });
  }
  exports.StoryList = StoryList
})(this)
