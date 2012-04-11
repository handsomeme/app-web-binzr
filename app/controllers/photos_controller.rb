class PhotosController < ApplicationController  
  respond_to :json
  
  def create    
    if remotipart_submitted?
      photo = params[:photo]
      File.open(Rails.root.join('public', 'img', photo.original_filename), 'w') do |file|
        file.binmode
        file.write(photo.read)
      end    
      render :json => {"success" => true, "data" => photo.original_filename}
    else
      render :json => {"success" => false, "data" => photo.original_filename}
    end
  end
end