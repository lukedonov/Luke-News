describe ('StoryModel', function() {
  var story;

  it('takes headline as an argument', function() {
    story = new StoryModel('this is the headline', 'this is the body')
    expect(story.headline).toEqual('this is the headline')
  })

  it('takes headline as an argument', function() {
    story = new StoryModel('this is the headline', 'this is the body')
    expect(story.body).toEqual('this is the body')
  })
})