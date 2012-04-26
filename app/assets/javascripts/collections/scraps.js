app.collections.Scraps = Backbone.Collection.extend({  
  initialize : function() {
    this.url = "/scrap.json";
  },
  model: function(attrs, options) {
    var modelClass = app.models[attrs.post_type] || app.models.Trip;
    return new modelClass(attrs, options);
  }
})