class Hero < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :description, presence: true
end
