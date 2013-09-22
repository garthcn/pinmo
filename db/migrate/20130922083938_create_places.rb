class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.string :lat
      t.string :lon
      t.integer :zIndex
      t.integer :count

      t.timestamps
    end
  end
end
