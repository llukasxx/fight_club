class AddAvatarToHeros < ActiveRecord::Migration
  def change
    add_column :heros, :avatar, :string
  end
end
