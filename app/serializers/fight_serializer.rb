class FightSerializer < ActiveModel::Serializer
  attributes :id, :weather, :winner_chance, :gained_exp

  has_one :winner

  has_one :loser
end
