class AddElementToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :element, :string
  end
end
