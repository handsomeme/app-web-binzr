var app = {
  collections: {},
  models: {},
  views: {},
  forms: {},
  initialize: function() {
    app.router = new app.Router();
    Backbone.history.start({pushState: true});
    // app.router.navigate("/", true);
    app.router.navigationView();
    app.router.streamView();
  }
}

$(function() {
  app.initialize();
});
