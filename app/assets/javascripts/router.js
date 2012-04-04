app.Router = Backbone.Router.extend({
  routes: {
    "/": "board",
    "zoomUp/:id": "zoomUp"
  },
  streamView: function() {
    app.stream = new app.models.Stream();
    var streamView = new app.views.StreamView({model: app.stream}).render();
    $('#stream-view').html(streamView.el);
  },
  zoomUp: function(id) {
    // app.mashup = new app.models.Mashup({trip: app.stream.trips.get(id)})
    var zoomUpView = new app.views.ZoomUp({model: app.stream.trips.get(id)}).render();
    $('#zoom-scroll-container').html(zoomUpView.el);
    zoomUpView.show();
  }
});