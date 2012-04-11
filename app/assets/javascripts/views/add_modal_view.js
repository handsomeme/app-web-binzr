app.views.AddModalView = app.views.Base.extend({
  className: "add-modal-view modal padding-less wide",
  templateName: "add-modal-view",  
  events: {
    "click #add-trip": "showScrabTripModal",
    "click #upload-trip": "showUploadTripModal",
    "click #create-board": "showBoardTripModal",
    "click .close": "close"
  },
  initialize: function(options) {
    this.node = options.node;
    this.uploadTripModalView = app.router.uploadTripModalView();
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
  showScrabTripModal: function(e) {
    if (e) { e.preventDefault(); }        
  },
  showUploadTripModal: function(e) {
    if (e) { e.preventDefault(); }  
    this.close();  
    this.uploadTripModalView.show();
  },
  showBoardTripModal: function(e) {
    if (e) { e.preventDefault(); }    
  },
  render: function(e) {    
    if (e) { e.preventDefault(); }    
    this.template = JST[this.templateName];
    $(this.el).html(this.template({}));
    return this;
  }
})