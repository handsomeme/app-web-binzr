class PhotosController < ApplicationController  
  respond_to :json
  
  def create    
    if remotipart_submitted?
      @photo = Photo.new(:photo => params[:photo])
      # puts @photo.inspect
      @photo.save
      render :json => {:success => true,
                       :data => { :photo_id => @photo.id,
                                  :image_url => @photo.url,
                                  :image_url_medium => @photo.url(:thumb_medium),
                                  :image_url_small => @photo.url(:thumb_small)}
                      }
    else
      render :json => {"success" => false, "data" => @photo.image_path}
    end
  end
end