class Hero < ActiveRecord::Base
  # Validations
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :description, presence: true
  validates :skills, length: {minimum: 3, maximum: 10}
  validate :total_level
  
  # Associations
  has_many :skills, dependent: :destroy
  has_many :wins, class_name: "Fight", foreign_key: "winner_id", dependent: :destroy
  has_many :loses, class_name: "Fight", foreign_key: "loser_id", dependent: :destroy
  accepts_nested_attributes_for :skills

  # Carrierwave
  mount_uploader :avatar, AvatarUploader
  

  def total_power
    skills.pluck(:level).sum
  end

  def avatar_url
    avatar.url
  end

  def wind_power
    skills.where(element: 'wind').pluck(:level).sum
  end

  def water_power
    skills.where(element: 'water').pluck(:level).sum
  end

  def earth_power
    skills.where(element: 'earth').pluck(:level).sum
  end

  def fire_power
    skills.where(element: 'fire').pluck(:level).sum
  end

  private
    
    def total_level
      sum = skills.map { |s| s.level }.sum
      if sum > 10
        errors.add(:skills, "total power can't be greater than 10")
      elsif sum < 5
        errors.add(:skills, "total power can't be less than 5")
      end
    end

end
