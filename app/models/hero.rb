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

  def level
    case experience
      when 0..29 then 1
      when 30..89 then 2
      when 90..269 then 3
      when 270..809 then 4
      when 810..2429 then 5
      else 6
    end
  end

  def current_level_percentage
    case level
      when 1 then experience*100/30
      when 2 then experience*100/90
      when 3 then experience*100/270
      when 4 then experience*100/810
      when 5 then experience*100/2430
      when 6 then 100
    end
  end

  def win_ratio
    (wins.count.to_f/number_of_fights*100).round(2)
  end

  def number_of_fights
    wins.count + loses.count
  end

  def total_power
    skills.pluck(:level).sum
  end

  def avg_exp
    exp = wins.pluck(:gained_exp)
    (exp.inject{ |sum, el| sum + el }.to_f / exp.size).round(2)
  end

  def fav_weather
    weather = wins.pluck(:weather).group_by(&:itself).values.max_by(&:size).first.capitalize
  end

  def avatar_url
    avatar.url || '/noavatar.jpeg'
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
