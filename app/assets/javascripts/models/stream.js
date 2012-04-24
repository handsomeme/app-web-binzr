app.models.Stream = Backbone.Collection.extend({
  initialize: function() {
    this.trips = new app.collections.Trips();
    this.currentPage = 1;
  },
  url: function() {
    return _.any(this.trips.models) ? this.limitOffsetFilteredPath() : this.trips.url;
  },
  fetching_: false,
  fetch: function() {
    if (this.fetching_) { return false; }
    var self = this;

    // we're fetching the collection...
    self.fetching_ = true;
    this.trips
      .fetch({
        add: true, 
        url: self.url()
      })
      .done(
        function(resp) {
          // we're done fetching
          self.fetching_ = false;
          self.currentPage++;
          self.trigger("fetched", self);          
          if (resp && resp.length == 0) {
            self.trigger("allTripsLoaded", self);
          }
        }
      );
    return this;
  },
  limitOffsetFilteredPath: function() {
    return this.trips.url + "?page=" + this.currentPage + "&limit=16";
  },
  basePath : function() {
    return document.location.pathname;
  }
  
})