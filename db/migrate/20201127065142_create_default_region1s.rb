class CreateDefaultRegion1s < ActiveRecord::Migration[6.0]
  def change
    create_table :default_region1s do |t|
      t.string :name,        null: false
      t.integer :sort_order, null: false
      t.references :default_country, null: false, foreign_key: true
      t.timestamps
    end
  end
end
