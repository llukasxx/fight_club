class HeroSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :avatar_url

  has_many :skills
end
