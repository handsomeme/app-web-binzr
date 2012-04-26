app.models.Scrap = Backbone.Collection.extend({
  initialize: function() {
    this.scraps = new app.collections.Scraps();    
  },
  url: function() {
    return this.scraps.url + "?url=" + this.baseUrl;
  },
  fetching_: false,
  fetch: function() {
    if (this.fetching_) { return false; }
    var self = this;

    // we're fetching the collection...
    self.fetching_ = true;
    this.scraps
      .fetch({
        add: true, 
        url: self.url()
      })
      .done(
        function(resp) {
          // we're done fetching
          self.fetching_ = false;
          self.trigger("fetched", self);                            
        }
      );
    return this;
  }
})