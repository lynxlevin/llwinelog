class CreateDefaultCountries < ActiveRecord::Migration[6.0]
  def change
    create_table :default_countries do |t|
      t.string :name,        null: false
      t.integer :sort_order, null: false
      t.timestamps
    end
  end
end
