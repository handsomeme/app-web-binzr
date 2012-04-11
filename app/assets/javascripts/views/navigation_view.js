app.views.NavigationView = app.views.Base.extend({
  className: "navigation-view",
  templateName: "navigation-view",
  events: {
    "click #show-add-modal": "showAddModal"    
  },
  initialize: function() {
    this.modalView = app.router.addModalView();
  },
  showAddModal: function(e) {
    if (e) { e.preventDefault(); }    
    this.modalView.show();
  },  
  render: function(e) {    
    if (e) { e.preventDefault(); }    
    this.template = JST[this.templateName];
    $(this.el).html(this.template({}));
    $(this.el).addClass("nav pull-right");
    return this;
  }
})