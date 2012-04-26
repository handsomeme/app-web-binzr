class Trip 
  include MongoMapper::Document
  
  key :title,               String
  key :image_url,           String
  key :description,         String
  key :location,            String
  key :link,                String
  key :width,               Float, :default => 0.0
  key :height,              Float, :default => 0.0  
  
  validates_presence_of :title, :image_url, :width, :height
end
