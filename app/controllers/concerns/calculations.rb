module Calculations
  def calculate_winner(chances)
    host_chance = chances[:host]
    guest_chance = chances[:guest]
    
    host_array = Array.new(host_chance) { |i| "host" }
    guest_array = Array.new(guest_chance) { |i| "guest" }

    chances_array = host_array + guest_array

    # Super shuffling algorithm :D
    100.times do |n|
      shuffle = rand(0..n)
      chances_array[n], chances_array[shuffle] = chances_array[shuffle], chances_array[n]
    end

    chances_array.sample
  end

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

    chances = {host: host_chance, guest: guest_chance, weather: chosen_weather}
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
        (hero.wind_power * 2) + (hero.earth_power * -2)
      when "rainy"
        (hero.water_power * 2) + (hero.fire_power * -2)
      when "dry"
        (hero.earth_power * 2) + (hero.water_power * -2)
      when "hot"
        (hero.fire_power * 2) + (hero.wind_power * -2)
    end
  end

  def calc_level_mod(host, guest)
    host.level - guest.level
  end

  def calc_gained_exp(chances)
    case chances
      when 0..4 then 28
      when 5..9 then 26
      when 10..14 then 24
      when 15..19 then 22
      when 20..24 then 20
      when 25..29 then 18
      when 30..34 then 16
      when 35..39 then 14
      when 40..44 then 12
      when 45..54 then 10
      when 55..59 then 8
      when 60..64 then 6
      when 65..69 then 4
      when 70..74 then 2
      else 0
    end
  end
end