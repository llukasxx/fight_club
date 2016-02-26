class AddExperienceToHeros < ActiveRecord::Migration
  def change
    add_column :heros, :experience, :integer, default: 0
  end
end
