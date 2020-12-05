class CreateDefaultTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :default_types do |t|
      t.string :name,        null: false
      t.integer :sort_order, null: false
      t.timestamps
    end
  end
end
