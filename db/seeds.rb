# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "csv"

CSV.foreach('db/seeds/default_countries.csv', headers: true) do |row|
  DefaultCountry.create(
    id: row['id'],
    name: row['name'],
    sort_order: row['sort_order']
  )
end

CSV.foreach('db/seeds/default_region1s.csv', headers: true) do |row|
  DefaultRegion1.create(
    id: row['id'],
    name: row['name'],
    sort_order: row['sort_order'],
    default_country_id: row['default_country_id']
  )
end

CSV.foreach('db/seeds/default_classes.csv', headers: true) do |row|
  DefaultClass.create(
    id: row['id'],
    name: row['name'],
    sort_order: row['sort_order'],
    default_region1_id: row['default_region1_id']
  )
end

CSV.foreach('db/seeds/default_ratings.csv', headers: true) do |row|
  DefaultRating.create(
    id: row['id'],
    name: row['name'],
    sort_order: row['sort_order']
  )
end

CSV.foreach('db/seeds/default_types.csv', headers: true) do |row|
  DefaultType.create(
    id: row['id'],
    name: row['name'],
    sort_order: row['sort_order']
  )
end

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