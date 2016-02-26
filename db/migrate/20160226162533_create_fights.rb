class CreateFights < ActiveRecord::Migration
  def change
    create_table :fights do |t|
      t.integer :winner_id, index: true
      t.integer :loser_id, index: true
      t.string :weather
      t.integer :gained_exp
      t.integer :winner_chance

      t.timestamps null: false
    end
  end
end
