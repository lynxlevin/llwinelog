# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_05_044647) do

  create_table "default_classes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.integer "sort_order", null: false
    t.bigint "default_region1_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["default_region1_id"], name: "index_default_classes_on_default_region1_id"
  end

  create_table "default_countries", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.integer "sort_order", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "default_ratings", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.integer "sort_order", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "default_region1s", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.integer "sort_order", null: false
    t.bigint "default_country_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["default_country_id"], name: "index_default_region1s_on_default_country_id"
  end

  create_table "default_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.integer "sort_order", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "original_templates", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "template_name", null: false
    t.integer "sort_order"
    t.integer "type_id_value"
    t.integer "country_id_value"
    t.integer "region1_id_value"
    t.string "region2_value"
    t.string "region3_value"
    t.string "producer_value"
    t.integer "class_id_value"
    t.integer "vintage_value"
    t.string "grape1_value"
    t.string "grape2_value"
    t.string "grape3_value"
    t.string "grape4_value"
    t.string "grape5_value"
    t.string "shop_value"
    t.text "comment_value"
    t.integer "alcohol_value"
    t.string "importer_name_value"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_original_templates_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "winelogs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "wine_name", null: false
    t.date "tasted_date"
    t.integer "type_id"
    t.integer "country_id"
    t.integer "region1_id"
    t.string "region2"
    t.string "region3"
    t.string "producer"
    t.integer "class_id"
    t.integer "vintage"
    t.string "grape1"
    t.string "grape2"
    t.string "grape3"
    t.string "grape4"
    t.string "grape5"
    t.integer "price"
    t.string "shop"
    t.integer "rating_id"
    t.text "comment"
    t.float "alcohol"
    t.string "importer_name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_winelogs_on_user_id"
  end

  add_foreign_key "default_classes", "default_region1s"
  add_foreign_key "default_region1s", "default_countries"
  add_foreign_key "original_templates", "users"
  add_foreign_key "winelogs", "users"
end
