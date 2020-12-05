class CreateDefaultTemplates < ActiveRecord::Migration[6.0]
  def change
    create_table :default_templates do |t|
      t.string :template_name, null: false
      t.integer :sort_order
      t.integer :type_id_value
      t.integer :country_id_value
      t.integer :region1_id_value
      t.string :region2_value
      t.string :region3_value
      t.string :producer_value
      t.integer :class_id_value
      t.integer :vintage_value
      t.string :grape1_value
      t.string :grape2_value
      t.string :grape3_value
      t.string :grape4_value
      t.string :grape5_value
      t.string :shop_value
      t.text :comment_value
      t.integer :alcohol_value
      t.string :importer_name_value
      t.timestamps
    end
  end
end
