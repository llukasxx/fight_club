class Fight < ActiveRecord::Base
  # validations
  validates :winner_id, presence: true
  validates :loser_id, presence: true
  validates :weather, presence: true, format: {with: /rainy|windy|dry|hot/} 
  validates :gained_exp, presence: true
  validates :winner_chance, presence: true
  # Associations
  belongs_to :winner, class_name: "Hero", foreign_key: :winner_id
  belongs_to :loser, class_name: "Hero", foreign_key: :loser_id
end
