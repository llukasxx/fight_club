# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160226232104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fights", force: :cascade do |t|
    t.integer  "winner_id"
    t.integer  "loser_id"
    t.string   "weather"
    t.integer  "gained_exp"
    t.integer  "winner_chance"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "fights", ["loser_id"], name: "index_fights_on_loser_id", using: :btree
  add_index "fights", ["winner_id"], name: "index_fights_on_winner_id", using: :btree

  create_table "heros", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.text     "description"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "avatar"
    t.integer  "experience",  default: 0
  end

  create_table "skills", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "level"
    t.integer  "hero_id"
    t.string   "element"
  end

end
