var AddModalView = {
  show: function() {    
    var modal = $("#add-modal");
    modal.css("display", "block");
    modal.css("-webkit-transform", "none");
  },
  close: function() {
    var modal = $("#add-modal");
    modal.css("display", "none");
    modal.css("-webkit-transform", "translateZ(0)");
  }
}