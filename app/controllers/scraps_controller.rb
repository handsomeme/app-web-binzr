require 'net/http'
class ScrapsController < ApplicationController
  
  # tested with: curl -XGET http://binzr.com/scrap?url=http%3A%2F%2Fphotobucket.com%2Fimages%2Facid%2520trip%2F
  def show
    puts params[:url]
    html = Net::HTTP.get URI(params[:url])
    page = Page.new
    Nokogiri::HTML::SAX::Parser.new(page).parse html
    render :json => page.images
  end
end