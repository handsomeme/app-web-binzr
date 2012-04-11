class Page < Nokogiri::XML::SAX::Document
  attr_reader :images
  def start_element name, attributes = []
    @images ||= []
    if name == 'img'
      @images << attributes.inject({}) do |h, attr_arr|
        if attr_arr.first == 'src' ||  attr_arr.first == 'title' ||  attr_arr.first == 'alt'
          h[attr_arr.first] = attr_arr.last
        end
        h
      end
    end
  end
end