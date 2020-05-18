(function(exports) { 
  function StoryModel(headline,body,id,thumbnailUrl) {
    this.headline = headline;
    this.body = body;
    this.id = id
    this.thumbnailUrl = thumbnailUrl
  }

  exports.StoryModel = StoryModel
})(this)