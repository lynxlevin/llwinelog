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