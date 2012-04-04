app.views.ZoomUp = app.views.Base.extend({
  className: "zoom-up-view",
  templateName: "zoom-up-view",
  events: {
    "click #zoom-scroll.visible": "destroy"
  },
  initialize: function() {   
  },
  render: function(e) {
    if (e) { e.preventDefault(); }      
    this.template = JST[this.templateName];
    $(this.el).html(this.template({
      title: this.model.get('title'),
      location: this.model.get('location'),
      description: this.model.get('description'),
      primary_photo: this.model.get('primary_photo')
    }));
    return this;
  },
  showGoogleMap: function() {
    var latlng = new google.maps.LatLng(48.843, 2.275);
    var myOptions = {
      zoom: 13,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var container = $('#map-view');
    this.map = new google.maps.Map(container[0], myOptions);
  },
  destroy: function(e) {
    if ($(e.target).is("#zoom-scroll")) {
      $('#trip-catalog').removeClass('noscroll');
      $('#zoom-scroll-container').html('');
      window.history.back();          
    }
  },
  show: function(e) {
    // Disable scroll on main trip-catalog view
    $('#trip-catalog').addClass('noscroll');
    $('#zoom-scroll').addClass('visible');
    $('#zoom-scroll').addClass('loaded');
    $('#zoom-up').removeClass('hide'); 
    this.showGoogleMap();
  }
})
