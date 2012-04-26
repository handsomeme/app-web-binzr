app.views.UploadTripModalView = app.views.Base.extend({
  className: "upload-trip-modal-view modal wide",
  templateName: "upload-trip-modal-view",  
  events: {
    "click .close": "close",
    "click .no-margin-bottom textarea": "cleanupLabel",
    "click a.binzit": "addTrip"
  },
  initialize: function(options) {  
    this.node = options.node; 
    this.boardSelector = new app.views.DropdownList();
    this.photoForm = new app.forms.Photo();
    this.photoForm.bind("uploadBegan", this.showTripBottom, this);
    this.photoForm.bind("photoUploaded", this.renderPhoto, this);
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
    
    this.$(".upload-trip").html(this.photoForm.render().el);
    return this;
  },
  showTripBottom: function() {
    this.$(".board-selector").html(this.boardSelector.render().el);
    this.$(".trip-bottom").show();  
  },
  hideTripBottom: function() {
    this.$(".trip-bottom").hide();  
  },
  renderPhoto: function() {
    this.$(".image-picker").html('<img src="' + 
      this.photoForm.model.get('image_url') + '" />');
  },
  cleanupLabel: function(e) {
    if (e) { e.preventDefault(); }
    $('.no-margin-bottom').find('label').text('');
  },
  reset: function() {
    $('.no-margin-bottom').find('label').text('Describe your trip');
    this.$(".description-text-area").val('');
    this.$(".image-picker").html('');
    this.photoForm.reset();
    // this.hideTripBottom();    
  },
  addTrip: function(e) {    
    var self = this;
    var trip = new app.models.Trip();
    trip.save({ title: this.boardSelector.selectedItem,
                description: this.$(".description-text-area").val(),
                photo_id: this.photoForm.model.get('photo_id')}, 
              { success: function() { 
                  self.close(); 
                  self.reset();
                  app.router.streamView();                  
                }, 
                error: function() { 
                  alert("Failed to create new trip"); 
                  self.close(); 
                }
              });    
  }
})