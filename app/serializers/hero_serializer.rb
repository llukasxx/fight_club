class HeroSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :description, :avatar_url, :total_power, :level, :experience

  has_many :skills
end
