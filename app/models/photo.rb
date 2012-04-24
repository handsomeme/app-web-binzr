class Photo 
  require 'carrierwave/orm/mongomapper'
  include MongoMapper::Document

  mount_uploader :image, ImageUploader
  key :width,   Float, :default => 0
  key :height,  Float, :default => 0
  
  def initialize(params = {})
    @random_string = SecureRandom.hex(10)
    image.store! params[:photo]
    self.width = image.geometry[0]
    self.height = image.geometry[1]
  end
  
  def random_string 
    @random_string
  end
  
  def url(name = nil)
    image.url(name)
  end
end