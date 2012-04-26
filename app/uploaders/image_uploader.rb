class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  
  def store_dir
    "img/#{model.id}"
  end

  def extension_white_list
    # %w(jpg jpeg gif png tiff)
  end

  def filename
    model.random_string + File.extname(@filename) if @filename
  end
  
  def geometry
    @geometry
  end
  
  def get_geometry
    img = MiniMagick::Image.open(@file.file)
    @geometry = [ img[:width], img[:height] ]
  end
  
  process :get_geometry
  version :thumb_small do
    process :resize_to_fill => [50,50]
    process :strip
  end
  version :thumb_medium do
    process :resize_to_limit => [100,100]
    process :strip
  end  
  
  # version :thumb_large do
  #   process :resize_to_limit => [300,300]
  #   process :strip
  # end
  # version :scaled_full do
  #   process :resize_to_limit => [700,700]
  #   process :strip
  # end  
  
  def strip
    manipulate! do |img|
      img.strip
      img = yield(img) if block_given?
      img
    end
  end
end