require 'net/http'
class ScrapsController < ApplicationController
  
  # tested with: curl -XPOST http://binzr.com/scrap -d 'url=http%3A%2F%2Fphotobucket.com%2Fimages%2Facid%2520trip%2F'
  def create
    html = Net::HTTP.get URI(params[:url])
    page = Page.new
    Nokogiri::HTML::SAX::Parser.new(page).parse html
    render :json => page.images
  end
end