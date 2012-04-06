var AddModalView = {
  getNodeId: function(app) {
    var node = $("#add-modal");
    if (app == "scrap") {
      node = $("#scrap-trip-modal");
    } else if (app == "upload") {
      node = $("#upload-trip-modal");
    } else if (app == "board") {
      node = $("#board-trip-modal");
    }
    return node
  },
  show: function(app) {        
    var modal = this.getNodeId(app)
    modal.css("display", "block");
    modal.css("-webkit-transform", "none");
  },
  close: function(app, child) {
    var modal = this.getNodeId(app)
    modal.css("display", "none");
    modal.css("-webkit-transform", "translateZ(0)");
    if (child != null) {
      this.show(child)
    } 
  }
}