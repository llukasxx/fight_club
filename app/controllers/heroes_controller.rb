class HeroesController < ApplicationController

  def index
    @heroes = Hero.all.includes(:skills)
    respond_to do |format|
      format.html
      format.json { render json: @heroes }
    end
  end

  def new
  end

  def show
    @hero = Hero.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @hero }
    end
  end

  def create
    hero = Hero.new(hero_params)
    if hero.save!
      render json: hero
    else
      render json: hero.errors
    end
  end

  private

    def hero_params
      params.require(:hero).permit(:first_name, :last_name, :avatar, 
                                   :description, skills_attributes: [:name, :level, :element])
    end
end
