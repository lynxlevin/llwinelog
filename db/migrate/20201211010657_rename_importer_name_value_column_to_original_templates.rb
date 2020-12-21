class RenameImporterNameValueColumnToOriginalTemplates < ActiveRecord::Migration[6.0]
  def change
    rename_column :original_templates, :importer_name_value, :importer_value
  end
end
