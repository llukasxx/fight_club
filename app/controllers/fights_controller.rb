class FightsController < ApplicationController
  def index

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
    host_chances = calculate_chances host, guest
    render json: {diff: host_chances}
  end

  private

    def calculate_chances(host, guest)
      # Skill mod
      total_power_diff = calc_power_diff(host, guest)
      # Skill element mod
      host_element_mod_advantage = calc_element_modifiers_advantage(host, guest)
      guest_element_mod_advantage = calc_element_modifiers_advantage(guest, host)
      # Weather mod
      weather = ["windy", "rainy", "dry", "hot"]
      chosen_weather = weather.sample
      host_weather_mod = calc_weather_mod(host, chosen_weather) - calc_weather_mod(guest, chosen_weather)
      # Exp lvl mod
      host_level_mod = calc_level_mod(host, guest)
      # Total chances
      host_chance = 53 + (total_power_diff * 3) + (host_level_mod * 3) + host_weather_mod +
                         (host_element_mod_advantage - guest_element_mod_advantage)
      guest_chance = 100 - host_chance

      chances = {host_chance: host_chance, guest_chance: guest_chance, weather: chosen_weather}
    end

    def calc_power_diff(host, guest)
      host.total_power - guest.total_power     
    end

    def calc_element_modifiers_advantage(first_player, second_player)
      advantage = 0
      if (first_player.wind_power > 0) && (second_player.earth_power > 0)
        if(first_player.wind_power >= second_player.earth_power)
          advantage += (second_player.earth_power * 2)
        else
          advantage += (first_player.wind_power * 2)
        end
      end

      if (first_player.water_power > 0) && (second_player.fire_power > 0)
        if(first_player.water_power >= second_player.fire_power)
          advantage += (second_player.fire_power * 2)
        else
          advantage += (first_player.water_power * 2)
        end
      end

      if (first_player.earth_power > 0) && (second_player.water_power > 0)
        if(first_player.earth_power >= second_player.water_power)
          advantage += (second_player.water_power * 2)
        else
          advantage += (first_player.earth_power * 2)
        end
      end

      if (first_player.fire_power > 0) && (second_player.wind_power > 0)
        if(first_player.fire_power >= second_player.wind_power)
          advantage += (second_player.wind_power * 2)
        else
          advantage += (first_player.fire_power * 2)
        end
      end
      advantage
    end

    def calc_weather_mod(hero, weather)
      case weather
      when "windy"
        hero.wind_power * 2
      when "rainy"
        hero.water_power * 2
      when "dry"
        hero.earth_power * 2
      when "hot"
        hero.fire_power * 2
      end
    end

    def calc_level_mod(host, guest)
      host.level - guest.level
    end

end
