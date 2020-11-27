class CreateWinelogs < ActiveRecord::Migration[6.0]
  def change
    create_table :winelogs do |t|
      t.string :wine_name, null: false
      t.date :tasted_date
      t.integer :type_id
      t.integer :country_id
      t.integer :region1_id
      t.string :region2
      t.string :region3
      t.string :producer
      t.integer :class_id
      t.integer :vintage
      t.string :grape1
      t.string :grape2
      t.string :grape3
      t.string :grape4
      t.string :grape5
      t.integer :price_range_id
      t.string :shop
      t.integer :rating_id
      t.text :comment
      t.integer :alcohol
      t.string :importer_name
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
