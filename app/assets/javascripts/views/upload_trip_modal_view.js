app.views.UploadTripModalView = app.views.Base.extend({
  className: "upload-trip-modal-view modal wide",
  templateName: "upload-trip-modal-view",  
  events: {
    "click .close": "close"
  },
  initialize: function(options) {  
    this.node = options.node; 
    this.photoForm = new app.forms.Photo();
    this.photoForm.bind("uploadBegan", this.showTripBottom, this);
    this.photoForm.bind("photoUploaded", this.renderPhoto, this);
  },  
  show: function(e) {
    if (e) { e.preventDefault(); }    
    this.node.css("display", "block");
    this.node.css("-webkit-transform", "none");    
  },
  close: function(e) {
    if (e) { e.preventDefault(); }    
    this.node.css("display", "none");
    this.node.css("-webkit-transform", "translateZ(0)");
  },
  render: function(e) {    
    if (e) { e.preventDefault(); }    
    this.template = JST[this.templateName];
    $(this.el).html(this.template({}));
    
    this.$(".upload-trip").html(this.photoForm.render().el);
    return this;
  },
  showTripBottom: function() {
    this.$(".trip-bottom").show();  
  },
  renderPhoto: function() {
    
    alert(this.photoForm.model.get('photo_url'))
  }
})