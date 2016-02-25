class HeroSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :description, :avatar_url

  has_many :skills
end
