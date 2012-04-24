app.views.DropdownList = app.views.Base.extend({
  className: "dropdown-list",
  templateName: "dropdown-list",  
  events: {
    "click .current": "showBoardList",
    "click .list li": "hideBoardList",
    "click .create-board input": "cleanupInputbox",
    "click .create-board .create": "addBoardList"
  },
  initialize: function(options) {  
    this.list = new Backbone.Collection();
    this.createBox = true;
    this.setupEvents();    
  },    
  setupEvents: function(e) {
    this.list.bind("add", this.addBoard, this);
  },
  render: function(e) {    
    if (e) { e.preventDefault(); }    
    this.template = JST[this.templateName];
    $(this.el).html(this.template({list: this.list}));    

    // TODO: testing list
    this.list.add(new Backbone.Model({"title": "Cafe/Restaurant Guide For NewYork"}));
    this.list.add(new Backbone.Model({"title": "Little corner store in Kyoto"}));
    this.list.add(new Backbone.Model({"title": "All about NewYork from local people"}));
    this.list.add(new Backbone.Model({"title": "London tour with Beatles"}));
    this.selectedItem = this.list.at(0).get("title");

    this.renderSelectedItem();
    if (this.createBox) { this.renderCreateBox(); }
    return this;
  },
  renderCreateBox: function() {
    this.$(".create-board").show();
  },
  renderSelectedItem: function() {    
    this.$(".current-board").text(this.selectedItem);
  },
  addBoard: function(board) {
    var listContainer = this.$(".list")
    listContainer.append("<li><span>" + board.get("title") + "</span></li>");
  },
  addBoardList: function(e) {
    if (e) { e.preventDefault(); }  
    this.list.add(new Backbone.Model({
      'title': this.$('.create-board').find('input').val()
      }));
    this.selectedItem = this.list.at(this.list.length - 1).get('title');    
    this.hideBoardList();
  },
  cleanupInputbox: function(e) {
    if (e) { e.preventDefault(); }  
    $(e.currentTarget).val('');     
  },
  showBoardList: function(e) {
    if (e) { e.preventDefault(); }    
    this.$(".board-list").show();
  },
  hideBoardList: function(e) {
    if (e) { 
      e.preventDefault(); 
      this.selectedItem = $(e.currentTarget).text();
    }    
    this.renderSelectedItem();
    this.$(".board-list").hide();    
  },
  reset: function() {
    this.hideBoardList();
  }
})