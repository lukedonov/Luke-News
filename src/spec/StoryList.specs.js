describe('StoryList', function() {
  var storylist;
  
  it('can add a story model to the story list', function() {
    storylist = new StoryList();
    storylist.addStory(new StoryModel('headline','body'))
    expect(storylist.listOfStories.length).toEqual(1)
  })

  it('can add a story model to the story list', function() {
    storylist = new StoryList();
    storylist.addStory(new StoryModel('headline','body'))
    expect(storylist.listOfStories[0]).toBeInstanceOf(StoryModel)
  })

  it('has an empty list by default', function() {
    storylist = new StoryList();
    expect(storylist.listOfStories).toEqual([])
  })

  // it('can recieve stories from the guardian api', function() {
  //   storylist = new StoryList();
  //   storylist.getStories()
  //   expect(storylist.listOfStories.length).toEqual(10)
  // })

  // it('can recieve stories from the guardian api', function() {
  //   storylist = new StoryList();
  //   storylist.getStories()
  //   expect(storylist.listOfStories[0]).toBeInstanceOf(StoryModel)
  // })
})