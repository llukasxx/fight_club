class FightsController < ApplicationController
  def index

  end

  def new
    @heroes = Hero.all
    @heroes = @heroes.map { |h| HeroSerializer.new(h).as_json }
  end

  def rules
    
  end

  def create
    fight = Fight.new
    render json: fight
  end

end
