class FightsController < ApplicationController
  def index

  end

  def new
    @heroes = Hero.all
    @heroes = @heroes.map { |h| HeroSerializer.new(h).as_json }
  end
end
