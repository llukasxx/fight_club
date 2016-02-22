class AddHeroIdToSkill < ActiveRecord::Migration
  def change
    add_column :skills, :hero_id, :integer, index: true
  end
end
