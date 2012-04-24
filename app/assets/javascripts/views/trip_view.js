app.views.Trip = app.views.Base.extend({
  className: "trip-view",
  templateName: "trip-view",
  padding: 0,
  rightMargin: 15,
  events: {
    "click .trip-photo": "showZoomUp",
    "mousedown .trip-photo": "springDown",
    "mouseup .trip-photo": "springUp",
    "mousemove .trip-photo": "springUp",
  },
  initialize: function(options) {
    this.boardCol = options.boardCol;
    this.boardWidth = options.boardWidth;
    this.margin = options.margin;
    this.currentCol = options.currentCol;
    this.photoHeight = 0;
    this.top = options.top;
  },
  bottom: function() {
    return this.top + $(this.el).find('.description').height() + this.photoHeight + 35;
  },
  width: function() {
    return (this.boardWidth - (
      ((this.boardCol - 1) * this.margin) + 
      (this.boardCol * ((this.padding * 2) + this.rightMargin)))) / 
      this.boardCol;
  },
  left: function() {
    // Before rendering the view, we need to calculate x and
    // y positions where to locate the current trip view.    
    return ((this.currentCol - 1) *
      (this.width() + this.margin + (this.padding * 2) + this.rightMargin));
  },
  resizeHeight: function(width, height, tripWidth) {
    return (tripWidth * height) / width;
  },
  springDown: function(e) {
    $(this.el).find('.well').addClass('spring');
  },
  springUp: function(e) {
    $(this.el).find('.well').removeClass('spring');
  },
  showZoomUp: function(e) {
    app.router.navigate("/zoomUp/" + this.model.get('id'), {trigger: true});
  },
  render: function(e) {
    var width = this.width();
    this.photoHeight = this.resizeHeight(this.model.get('width'),
                                         this.model.get('height'),
                                         width);
    if (e) { e.preventDefault(); }    
    this.template = JST[this.templateName];
    $(this.el).html(this.template({
      title: this.model.get('title'),
      location: this.model.get('location'),
      description: this.model.get('description'),
      primary_photo: this.model.get('image_url'),
      x: this.left(),
      w: width,
      top: this.top,
      locationTop: this.photoHeight - 20
    }));
    return this;
  }
})