class FightsController < ApplicationController
  include Calculations
  
  def index
    @fights = Fight.all.order('created_at DESC')
  end

  def new
    @heroes = Hero.all.includes(:skills)
    @heroes = @heroes.map { |h| HeroSerializer.new(h).as_json }
  end

  def rules
    
  end

  def create
    host = Hero.find(params[:host_id])
    guest = Hero.find(params[:guest_id])
    chances = calculate_chances(host, guest)
    winner = calculate_winner(chances)
    gained_exp = calc_gained_exp(chances[winner.to_sym])

    fight = Fight.new(winner: winner == "host" ? host : guest, 
                      loser: winner == "host" ? guest : host,
                      weather: chances[:weather],
                      winner_chance: chances[winner.to_sym],
                      gained_exp: gained_exp)

    if fight.save!
      fight.winner.experience += fight.gained_exp
      fight.winner.save!
      render json: fight
    else
      render json: fight.errors
    end
  end

end
