class Skill < ActiveRecord::Base
  validates :name, presence: true
  validates :level, presence: true, numericality: { only_integer: true, 
                                                    greater_than_or_equal_to: 0, 
                                                    less_than: 6 }
  belongs_to :hero
end
