class CreateDefaultClasses < ActiveRecord::Migration[6.0]
  def change
    create_table :default_classes do |t|
      t.string :name,        null: false
      t.integer :sort_order, null: false
      t.references :default_region1, null: false, foreign_key: true
      t.timestamps
    end
  end
end
