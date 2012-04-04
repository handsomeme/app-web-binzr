app.views.StreamView = app.views.Base.extend({
  className: "stream-view",
  templateName: "stream-view",
  boardCol: 4,
  boardWidth: 1024,
  margin: 0,
  initialize: function() {    
    this.stream = this.model;
    this.collection = this.model.trips;
    this.tripTable = [];    
    this.currentRow = 1;
    this.currentCol = 0;
    
    this.setupEvents();
    this.setupInfiniteScroll()    
  },
  setupEvents: function(e) {
    this.stream.bind("fetched", this.removeLoader, this);
    this.stream.bind("fetched", this.postRender, this);
    this.stream.bind("allTripsLoaded", this.unbindInfScroll, this);
    this.collection.bind("add", this.addTrip, this);
  },
  upperTrip: function(row, col) {
    return ((row > 1) ? 
      this.tripTable[row - 2][col - 1] :
      null);
  },
  addTrip: function(trip) {
    if (++this.currentCol > this.boardCol) { 
      this.currentCol = 1; 
      this.currentRow++;
    }    
    
    var upper = this.upperTrip(this.currentRow, 
                               this.currentCol);
    var tripView = new app.views.Trip({
      model: trip, 
      currentCol: this.currentCol,
      boardCol: this.boardCol,
      margin: this.margin,
      boardWidth: this.boardWidth,
      top: upper ? upper.bottom() : 0});
    
    $(this.el)[((this.collection.at(0).id) == trip.id) 
      ? "prepend" : "append"](tripView.render().el);
      
    // Trip table consist of column / row => table[column[row]]
    var row = this.tripTable[this.currentRow - 1];
    if (row == null) {
      row = [tripView];
      this.tripTable.push(row);
    } else {
      row.push(tripView);  
    }        
    
    return this;
  },
  render: function(e) {
    if (e) { e.preventDefault(); }
    if (this.stream.fetch()) {
      this.appendLoader();
    }
    return this;
  },
  postRender: function() {
    // Expand stream view container height as much we rendered.
    $('#stream-container').height($(document).height() - 100);
  },
  appendLoader: function(){
    $("#paginate").html($("<img>", {
      src : "/img/static-loader.png",
      "class" : "loader"
    }));
  },
  removeLoader: function() {
    $("#paginate").empty();
  },
  setupInfiniteScroll : function() {
    var throttledScroll = _.throttle($.proxy(this.infScroll, this), 200);
    $(window).scroll(throttledScroll);
  },
  infScroll : function() {
    var $window = $(window);
    var distFromTop = $window.height() + $window.scrollTop();
    var distFromBottom = $(document).height() - distFromTop;
    var bufferPx = 500;

    if (distFromBottom < bufferPx) {
      this.render();
    }

    return this;
  },
  unbindInfScroll : function() {
    $(window).unbind("scroll");
  }
});