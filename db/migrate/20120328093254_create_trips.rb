class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :title
      t.string :primary_photo
      t.text :description
      t.string :location
      t.float :width
      t.float :height      
      t.timestamps
    end
  end
end
