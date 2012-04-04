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
  window.JST["zoom-up-view"]=Handlebars.compile('\
  <div id="zoom-scroll">\
    <div id="zoom-up" class="zoom-up hide">\
      <div class="well">\
        <div class="zoom-up-photo">\
          <div>\
            <img class="photo" src="{{primary_photo}}" />\
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
