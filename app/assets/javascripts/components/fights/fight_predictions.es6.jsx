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
  calculateDifference(hostSkills, guestSkills) {
    let advantage = {
      wind_earth: hostSkills.wind - guestSkills.earth,
      water_fire: hostSkills.water - guestSkills.fire,
      earth_water: hostSkills.earth - guestSkills.water,
      fire_wind: hostSkills.fire - guestSkills.wind,
    };
    return advantage;
  }
  calculatePercentage(advantage) {
    //55% base chance for host winning
    let base = 55;
    //each advantage-disadvantage point +/- 3%
    let skillModifier = (advantage.wind_earth + advantage.water_fire 
                        + advantage.earth_water + advantage.fire_wind) * 3;
    let hostChance = base + skillModifier;

    return hostChance;
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.host && nextProps.guest) {
      let hostSkills = this.calculatePowerSkills(nextProps.host.skills);
      let guestSkills = this.calculatePowerSkills(nextProps.guest.skills);
      let skillAdvantage = this.calculateDifference(hostSkills, guestSkills);
      let hostChance = this.calculatePercentage(skillAdvantage);
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