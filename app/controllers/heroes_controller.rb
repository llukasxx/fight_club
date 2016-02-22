class HeroesController < ApplicationController

  def index
    @heroes = Hero.all
  end

  def new
  end

  def show
  end

end
