(function(exports) { 

  function StoryList() {
    this.listOfStories = []
    this.storyListView = new StoryListView(this.listOfStories)
    this.page = 0
  }

  StoryList.prototype.addStory = function(storyModel) {
    this.listOfStories.push(storyModel)
  }

  StoryList.prototype.getStories = function() {
    var page = this.page += 1
    const fetchPromise = fetch(`/api/stories/${page}`);
    fetchPromise.then(response => {
      console.log(response)
      return response.json();
    }).then(stories => {
      console.log(stories)
      // console.log(stories.response.results[0].apiUrl)
      for(i = 0; i < 10; i++) {
        var story = stories.response.results[i]
        this.addStory(new StoryModel(story.webTitle, story.webUrl, story.fields.thumbnail))
      }
      document.getElementById("stories").innerHTML = this.storyListView.viewHeadlines()
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });
  }

  StoryList.prototype.getStory = function() {
    document.getElementById("stories").innerHTML = this.storyListView.viewArticle()
  }

  exports.StoryList = StoryList
})(this)
