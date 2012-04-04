var app = {
  collections: {},
  models: {},
  views: {},
  initialize: function() {
    app.router = new app.Router();
    Backbone.history.start({pushState: true});
    // app.router.navigate("/", true);
    app.router.streamView();
  }
}

$(function() {
  app.initialize();
});
