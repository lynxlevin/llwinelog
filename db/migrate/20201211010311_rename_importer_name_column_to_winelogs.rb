class RenameImporterNameColumnToWinelogs < ActiveRecord::Migration[6.0]
  def change
    rename_column :winelogs, :importer_name, :importer
  end
end
