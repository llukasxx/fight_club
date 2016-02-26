class FightPredictions extends React.Component {
  constructor(props) {
    super(props)
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
    let hostAdvantage = {
      wind: hostSkills.wind - guestSkills.wind,
      water: hostSkills.water - guestSkills.water,
      earth: hostSkills.earth - guestSkills.earth,
      fire: hostSkills.fire - guestSkills.fire,
    };
    return hostAdvantage;
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.host && nextProps.guest) {
      let hostSkills = this.calculatePowerSkills(nextProps.host.skills);
      let guestSkills = this.calculatePowerSkills(nextProps.guest.skills);
      this.calculateDifference(hostSkills, guestSkills);
      console.log(this.calculateDifference(hostSkills, guestSkills));
    }
  }
  render() {
    return (
      <div className="center-block text-center">
        <div className="progress">
          <div className="progress-bar progress-bar-info"  style={{width:"50%"}}>
          </div>
          <div className="progress-bar progress-bar-warning" style={{width:"50%"}}>
          </div>
        </div>
      </div>
    )
  }
}