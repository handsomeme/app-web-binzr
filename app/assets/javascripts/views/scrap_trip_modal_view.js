app.views.ScrapTripModalView = app.views.Base.extend({
  className: "scrap-trip-modal-view modal wide",
  templateName: "scrap-trip-modal-view",  
  events: {
    "click .close": "close"
  },
  initialize: function(options) {  
    this.node = options.node; 
    this.boardSelector = new app.views.DropdownList();
    // this.photoForm = new app.forms.Photo();
    // this.photoForm.bind("uploadBegan", this.showTripBottom, this);
    // this.photoForm.bind("photoUploaded", this.renderPhoto, this);
  },  
  show: function(e) {
    if (e) { e.preventDefault(); }   
    $('#trip-catalog').addClass('noscroll');     
    this.node.css("display", "block");
    this.node.css("-webkit-transform", "none");    
  },
  close: function(e) {
    if (e) { e.preventDefault(); }    
    $('#trip-catalog').removeClass('noscroll');    
    this.node.css("display", "none");
    this.node.css("-webkit-transform", "translateZ(0)");
    this.boardSelector.reset();
  },
  render: function(e) {    
    if (e) { e.preventDefault(); }    
    this.template = JST[this.templateName];
    $(this.el).html(this.template({}));
    
    // this.$(".upload-trip").html(this.photoForm.render().el);
    return this;
  }
})
