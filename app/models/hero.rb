class Hero < ActiveRecord::Base
  # Validations
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :description, presence: true
  validates :skills, length: {minimum: 3, maximum: 10}
  
  # Associations
  has_many :skills, dependent: :destroy

end
