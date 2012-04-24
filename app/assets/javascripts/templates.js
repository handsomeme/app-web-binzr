(function() {
  window.JST=window.JST||{};
  window.JST["board-view"]=Handlebars.compile('{{#trips trips}}\n<div>{{this.get("location")}}</div>\n{{/trips}}');
  window.JST["trip-view"]=Handlebars.compile('\
  <div class="well" style="top: {{top}}px; left: {{x}}px; width: {{w}}px;">\
    <div class="trip-photo clickable">\
      <img src="{{primary_photo}}" />\
    </div>\
    <div class="title" style="top: {{locationTop}}px;">{{title}}</div>\
    <div class="location" style="top: {{locationTop}}px;">{{location}}</div>\
    <div class="description">{{description}}</div>\
  </div>');
  window.JST["navigation-view"]=Handlebars.compile('\
  <li><a id="show-add-modal" href="#">Add +</a></li>\
  <li class="divider-vertical"</li>\
  <li class="dropdown">\
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">About\
      <b class="caret"></b>\
    </a>\
    <ul class="dropdown-menu">\
      <li><a href="#">Blog</a></li>\
      <li><a href="#">Help</a></li>\
      <li><a href="#">Team</a></li>\
    </ul>\
  </li>\
  <li class="divider-vertical"></li>\
  <li class="dropdown">\
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Login\
      <b class="caret"></b>\
    </a>\
    <ul class="dropdown-menu">\
      <li><a href="#">Signup</a></li>\
    </ul>\
  </li>\
  ');
  window.JST["add-modal-view"]=Handlebars.compile('\
  <div class="header lg">\
    <a href="#" class="close"><span></span></a>\
    <h3>Add</h3>\
  </div>\
  <div class="menu">\
    <a href="#" class="cell" id="add-trip">Add a Trip</a>\
    <a href="#" class="cell" id="upload-trip">Upload a Trip</a>\
    <a href="#" class="cell" id="create-board">Create a Trip board</a>\
  </div>\
  ');
  window.JST["photo-form"]=Handlebars.compile('\
  <form accept-charset="UTF-8" action="/photo" class="new_photo" data-remote="true" data-type="json" enctype="multipart/form-data" method="post">\
    <input name="authenticity_token" type="hidden"/>\
    <div style="margin:0;padding:0;display:inline">\
        <input name="utf8" type="hidden" value="✓"/>\
    </div>\
    <input name="photo" id="fileInput" type="file" class="input-file no-margin" />\
    <div class="photos"></div>\
  </form>\
  ');
  window.JST["dropdown-list"]=Handlebars.compile('\
  <div class="current">\
    <span class="current-board"></span>\
    <span class="down-arrow"></span>\
  </div>\
  <div class="board-list" style="display: none">\
    <div class="wrapper">\
      <ul class="list"></ul>\
      <div class="create-board" style="display: none">\
        <input type="text" value="Create New Bundle">\
        <a href="#" class="btn create">\
          <strong>Create</strong><span></span>\
        </a>\
      </div>\
    </div>\
  </div>\
  ');
  window.JST["upload-trip-modal-view"]=Handlebars.compile('\
  <div class="header lg">\
    <a href="#" class="close"><span></span></a>\
    <h3>Upload a Trip</h3>\
  </div>\
  <div class="upload-trip"></div>\
  <div class="trip-bottom" style="display: none;">\
    <div class="image-picker"></div>\
    <div class="trip-form">\
      <div class="board-selector board-picker"></div>\
      <div class="input-area">\
        <ul class="form fancy-form no-margin">\
          <li class="no-margin-bottom">\
            <textarea class="description-text-area" rows="2" name="caption"></textarea>\
            <label>Describe your trip</label>\
          </li>\
        </ul>\
      </div>\
      <div>\
        <a href="#" class="btn btn-danger btn-large binzit"><strong>binzit</strong></a>\
      </div>\
    </div>\
  </div>\
  ');  
  window.JST["scrap-trip-modal-view"]=Handlebars.compile('\
  <div class="header lg">\
    <a href="#" class="close"><span></span></a>\
    <h3>Scrap a Trip</h3>\
  </div>\
  <div class="scrap-trip">\
    <a href="#" id="scrap-button" class="pull-right btn btn-large btn-primary">\
      <strong>Find trips</strong>\
    </a>\
    <input class="input-medium" type="text" placeholder="http://">\
  </div>\
  <div class="trip-bottom">\
    <div class="image-picker">\
      <img src="/img/demo10.jpg" />\
    </div>\
    <div class="trip-form">\
      <div class="board-selector board-picker"></div>\
      <div class="input-area">\
        <ul class="form fancy-form no-margin">\
          <li class="no-margin-bottom">\
            <textarea class="description-text-area" rows="2" name="caption"></textarea>\
            <label>Describe your trip</label>\
          </li>\
        </ul>\
      </div>\
      <div>\
        <a href="#" class="btn btn-danger btn-large"><strong>binzit</strong></a>\
      </div>\
    </div>\
  </div>\
  ');
  window.JST["zoom-up-view"]=Handlebars.compile('\
  <div id="zoom-scroll">\
    <div id="zoom-up" class="zoom-up hide">\
      <div class="well">\
        <div class="zoom-up-photo">\
          <div>\
            <img class="photo" src="{{image_url}}" />\
          </div>\
          <div style="margin-right: 10px">\
            <img class="user-icon" src="/img/icon.jpg" />\
          </div>\
          <div class="title">{{title}}</div>\
          <div class="location">{{location}}</div>\
          <div class="source">\
            <div>minsikzzang uploaded via iphone</div>\
            <div style="display: block;">about an hour ago</div>\
          </div>\
          <div class="description">{{description}}</div>\
        </div>\
        <div id="map-view">\
        </div>\
        <div class="trip-info" id="zoom-package">\
          <div>Belongs to travel packages</div>\
          <div class="thumb">\
            <img src="/img/demo0.jpg" />\
            <img src="/img/demo1.jpg" />\
            <img src="/img/demo2.jpg" />\
            <img src="/img/demo3.jpg" />\
            <img src="/img/demo4.jpg" />\
          </div>\
        </div>\
        <div class="trip-info" id="zoom-by-user">\
          <div>Posted by minsikzzang</div>\
          <div class="thumb">\
            <img src="/img/demo5.jpg" />\
            <img src="/img/demo6.jpg" />\
            <img src="/img/demo7.jpg" />\
            <img src="/img/demo8.jpg" />\
            <img src="/img/demo9.jpg" />\
          </div>\
        </div>\
        <div class="trip-info" id="zoom-releated">\
          <div>Related with</div>\
          <div class="thumb">\
            <img src="/img/demo5.jpg" />\
            <img src="/img/demo6.jpg" />\
            <img src="/img/demo7.jpg" />\
            <img src="/img/demo8.jpg" />\
            <img src="/img/demo9.jpg" />\
            <img src="/img/demo10.jpg" />\
            <img src="/img/demo11.jpg" />\
            <img src="/img/demo12.jpg" />\
            <img src="/img/demo13.jpg" />\
            <img src="/img/demo14.jpg" />\
            <img src="/img/demo15.jpg" />\
          </div>\
        </div>\
        <div class="modal-footer">\
        </div>\
      </div>\
    </div>\
  </div>\
  ')})();
