describe('StoryListView', function() {
  var storyListView;

  it('has an empty list by default', function() {
    storyListView = new StoryListView();
    expect(storyListView.list).toEqual([])
  })
})