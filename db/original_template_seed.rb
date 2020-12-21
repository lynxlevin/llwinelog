require "csv"

CSV.foreach('db/seeds/original_templates.csv', headers: true) do |row|
  OriginalTemplate.create(
    id: row['id'],
    template_name: row['template_name'],
    sort_order: row['sort_order'],
    type_id_value: row['type_id_value'],
    country_id_value: row['country_id_value'],
    region1_id_value: row['region1_id_value'],
    region2_value: row['region2_value'],
    region3_value: row['region3_value'],
    producer_value: row['producer_value'],
    class_id_value: row['class_id_value'],
    vintage_value: row['vintage_value'],
    grape1_value: row['grape1_value'],
    grape2_value: row['grape2_value'],
    grape3_value: row['grape3_value'],
    grape4_value: row['grape4_value'],
    grape5_value: row['grape5_value'],
    shop_value: row['shop_value'],
    comment_value: row['comment_value'],
    alcohol_value: row['alcohol_value'],
    importer_value: row['importer_name_value'],
    user_id: 1
  )
end