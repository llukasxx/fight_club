class Skill < ActiveRecord::Base
  validates :name, presence: true
  validates :level, presence: true, numericality: { only_integer: true, 
                                                    greater_than_or_equal_to: 0, 
                                                    less_than: 6 }
  validates :element, presence: true, format: {with: /wind|water|earth|fire/}
  belongs_to :hero
end
