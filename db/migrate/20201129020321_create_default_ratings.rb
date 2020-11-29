class CreateDefaultRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :default_ratings do |t|
      t.string :name,        null: false
      t.integer :sort_order, null: false
      t.timestamps
    end
  end
end
