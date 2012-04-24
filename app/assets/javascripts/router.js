app.Router = Backbone.Router.extend({
  routes: {
    "/": "streamView",
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
  },
  navigationView: function() {
    var node = $("#navigation");
    var navigationView = new app.views.NavigationView().render();
    node.html(navigationView.el);
  },
  addModalView: function() {
    var node = $("#add-modal");
    var modalView = new app.views.AddModalView({node: node}).render();
    node.html(modalView.el);
    return modalView;
  },
  uploadTripModalView: function() {
    var node = $("#upload-trip-modal");
    var modalView = new app.views.UploadTripModalView({node: node}).render();
    node.html(modalView.el);
    return modalView;    
  },
  scrapTripModalView: function() {
    var node = $("#scrap-trip-modal");
    var modalView = new app.views.ScrapTripModalView({node: node}).render();
    node.html(modalView.el);
    return modalView;
  }
});