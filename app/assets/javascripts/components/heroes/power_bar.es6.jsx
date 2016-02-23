class PowerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wind: "0%", water: "0%", earth: "0%", fire: "0%"}
    this.calculatePower = this.calculatePower.bind(this);
  }
  calculatePower(skills) {
    let wind = 0;
    let water = 0;
    let earth = 0;
    let fire = 0;
    if(skills.length > 0) {
      skills.map(function(element) {
        switch(element.skillElement) {
          case 'wind':
            wind += element.skillPower;
            break;
          case 'water':
            water += element.skillPower;
            break;
          case 'earth':
            earth += element.skillPower;
            break;
          case 'fire':
            fire += element.skillPower;
            break;
        }
      });
    }
    this.setState({wind: String(wind*10)+ "%", 
                   water: String(water*10)+ "%", 
                   earth: String(earth*10)+ "%", 
                   fire: String(fire*10)+ "%"})
  }
  componentWillReceiveProps(nextProps) {
    this.calculatePower(nextProps.skills);
  }
  render() {
    if (this.props.totalPower < 11) {
      return (
        <div className="progress">
          <div className="progress-bar wind" style={{width: this.state.wind}}>
          </div>
          <div className="progress-bar water" style={{width: this.state.water}}>
          </div>
          <div className="progress-bar earth" style={{width: this.state.earth}}>
          </div>
          <div className="progress-bar fire" style={{width: this.state.fire}}>
          </div>
        </div>)
    } else {
      return(
        <p className="bg-danger"><small><b>Danger: </b><i>power overwhelmed, please remove some skill.</i></small></p>
      )
    }
  }
}