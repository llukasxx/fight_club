class FightPredictions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hostChance: "50%", guestChance: "50%"};
  }
  calculatePowerSkills(skills) {
    let wind = 0;
    let water = 0;
    let earth = 0;
    let fire = 0;
    skills.map(function(element) {
      switch(element.element) {
        case 'wind':
          wind += element.level;
          break;
        case 'water':
          water += element.level;
          break;
        case 'earth':
          earth += element.level;
          break;
        case 'fire':
          fire += element.level;
          break;
      }
    })
    return {wind: wind, water:water, earth:earth, fire: fire};
  }
  calculateModifiers(firstPlayer, secondPlayer) {
    let modifierAdvantage = {
      wind_earth: 0,
      water_fire: 0,
      earth_water: 0,
      fire_wind: 0,
    };
    
    if(firstPlayer.wind > 0 && secondPlayer.earth > 0) {
      if(firstPlayer.wind >= secondPlayer.earth) {
        modifierAdvantage.wind_earth = secondPlayer.earth * 0.2
      } else if(firstPlayer.wind < secondPlayer.earth) {
        modifierAdvantage.wind_earth = firstPlayer.wind * 0.2
      }
    }
    if(firstPlayer.water > 0 && secondPlayer.fire > 0) {
      if(firstPlayer.water >= secondPlayer.fire) {
        modifierAdvantage.wind_earth = secondPlayer.fire * 0.2
      } else if(firstPlayer.water < secondPlayer.fire) {
        modifierAdvantage.wind_earth = firstPlayer.water * 0.2
      }
    }
    if(firstPlayer.earth > 0 && secondPlayer.water > 0) {
      if(firstPlayer.earth >= secondPlayer.water) {
        modifierAdvantage.earth_water = secondPlayer.water * 0.2
      } else if(firstPlayer.earth < secondPlayer.water) {
        modifierAdvantage.earth_water = firstPlayer.earth * 0.2
      }
    }
    if(firstPlayer.fire > 0 && secondPlayer.wind > 0) {
      if(firstPlayer.fire >= secondPlayer.wind) {
        modifierAdvantage.fire_wind = secondPlayer.wind * 0.2
      } else if(firstPlayer.fire < secondPlayer.wind) {
        modifierAdvantage.fire_wind = firstPlayer.fire * 0.2
      }
    }

    return modifierAdvantage;
  }
  calculatePercentage(hostModifiers, guestModifiers, host, guest) {
    let hostTotal = host.total_power;
    let guestTotal = guest.total_power;
    
    let hostTotalModifiers = (hostModifiers.wind_earth + hostModifiers.water_fire 
                              + hostModifiers.earth_water + hostModifiers.fire_wind);
    let guestTotalModifiers = (guestModifiers.wind_earth + guestModifiers.water_fire 
                              + guestModifiers.earth_water + guestModifiers.fire_wind);
    hostModifiedChance = (hostTotalModifiers - guestTotalModifiers) * 10;
    
    let hostChance = (((hostTotal - guestTotal) * 3) + (hostModifiedChance)  + 53);

    return hostChance;
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.host && nextProps.guest) {
      let hostSkills = this.calculatePowerSkills(nextProps.host.skills);
      let guestSkills = this.calculatePowerSkills(nextProps.guest.skills);
      let hostModifiers = this.calculateModifiers(hostSkills, guestSkills);
      let guestModifiers = this.calculateModifiers(guestSkills, hostSkills);
      
      let hostChance = this.calculatePercentage(hostModifiers, guestModifiers, nextProps.host, nextProps.guest);
      let guestChance = 100 - hostChance;
      this.setState({hostChance: String(hostChance) + "%", guestChance: String(guestChance) + "%"})
    } else {
      this.setState({hostChance: "50%", guestChance: "50%"});
    }
  }
  render() {
    return (
      <div className="center-block text-center">
        <div className="progress">
          <div className="progress-bar progress-bar-info"  style={{width: this.state.hostChance}}>
            {this.state.hostChance}
          </div>
          <div className="progress-bar progress-bar-warning" style={{width: this.state.guestChance}}>
            {this.state.guestChance}
          </div>
        </div>
      </div>
    )
  }
}