app.views.ScrapTripModalView = app.views.Base.extend({
  className: "scrap-trip-modal-view modal wide",
  templateName: "scrap-trip-modal-view",  
  events: {
    "click .close": "close",
    "click #scrap-button": "scrapWebsite",
    "click .no-margin-bottom textarea": "cleanupLabel",
    "click a.binzit": "addTrip"
  },
  initialize: function(options) {  
    this.node = options.node; 
    this.boardSelector = new app.views.DropdownList();
    this.scrap = new app.models.Scrap();
    this.collection = this.scrap.scraps;
    
    this.scrap.bind("fetched", this.scrapWebsiteDone, this);
    this.collection.bind("add", this.addScrapPhoto, this);    
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
    return this;
  },
  addScrapPhoto: function(scrap) {
    this.$(".carousel-inner")[((this.collection.at(0).cid) == scrap.cid) 
      ? "prepend" : "append"](
        '<div class="' + 
        (((this.collection.at(0).cid) == scrap.cid) ? 'active' : '') + 
        ' item"><img src="' + scrap.get('src') + '"></div>');
  },  
  showTripBottom: function() {
    this.$(".board-selector").html(this.boardSelector.render().el);
    this.$(".trip-bottom").show();  
  },
  hideTripBottom: function() {
    this.$(".trip-bottom").hide();  
  },
  scrapWebsiteDone: function() {
    this.showTripBottom();
  },
  scrapWebsite: function(e) {
    var url = this.$('.input-medium').val();
    if (url == "") {
      alert("Please enter a valid URL!!!");
    } else {
      this.collection.reset();
      this.$(".carousel-inner").html('');
      this.scrap.baseUrl = url;
      this.scrap.fetch();  
      this.$('.carousel').carousel({
        interval: 1500, 
        pause: true});    
      this.$('.carousel').carousel('pause');     
    }    
  },
  cleanupLabel: function(e) {
    if (e) { e.preventDefault(); }
    $('.no-margin-bottom').find('label').text('');
  },
  reset: function() {
    $('.no-margin-bottom').find('label').text('Describe your trip');
    this.$(".description-text-area").val('');  
    this.collection.reset();  
    this.$(".carousel-inner").html('');
    this.$('.input-medium').val('');
    this.hideTripBottom();    
  },
  addTrip: function(e) {    
    var self = this;
    var trip = new app.models.Trip();
    trip.save({ title: this.boardSelector.selectedItem,
                description: this.$(".description-text-area").val(),
                image_url: this.$(".active.item").find('img').attr('src'),
                link: this.scrap.baseUrl},                 
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
