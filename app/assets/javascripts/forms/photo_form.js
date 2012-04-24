app.forms.Photo = app.forms.Base.extend({
  templateName: "photo-form",
  events: {
    'ajax:complete .new_photo': "photoUploaded",
    "change input[name='photo']": "submitForm"
  },
  initialize: function() {
    
  },
  render: function(e) {
    if (e) { e.preventDefault(); }    
    this.template = JST[this.templateName];
    $(this.el).html(this.template({}));
    
    this.$("input[name=authenticity_token]").val($("meta[name=csrf-token]").attr("content"))
    // this.$("input[name=photo_ids]").val(this.photos.pluck("id"))
    return this;
  },
  submitForm: function() {    
    this.trigger("uploadBegan", this);    
    this.$("form").submit();    
  },
  photoUploaded: function(e, xhr) {
    resp = JSON.parse(xhr.responseText)
    if (resp.success) {
      this.model = new Backbone.Model(resp.data)
      this.trigger("photoUploaded", this);
    } else {
      alert("Upload failed! Please try again");
    }
  },
  reset: function() {
    this.$("input[name='photo']").val('');
  }
})