class ChangeSkillLevel < ActiveRecord::Migration
  def change
    remove_column :skills, :level
    add_column :skills, :level, :integer
  end
end
