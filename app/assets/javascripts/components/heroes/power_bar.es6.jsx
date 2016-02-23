class PowerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {green: "0%", yellow: "0%", red: "0%"}
    this.calculatePower = this.calculatePower.bind(this);
  }
  calculatePower(totalPower) {
    let percentage = 0;
    if(totalPower <= 5) {
      percentage = totalPower * 10;
      percentage = String(percentage) + "%";
      this.setState({green: percentage, yellow: "0%", red: "0%"});
    } else if (totalPower > 5 && totalPower <= 8) {
      percentage = (totalPower-5) * 10;
      percentage = String(percentage) + "%";
      this.setState({green: "50%", yellow: percentage, red: "0%"});
    } else if (totalPower > 8 && totalPower <= 10) {
      percentage = (totalPower-8) * 10;
      percentage = String(percentage) + "%";
      this.setState({green: "50%", yellow: "30%", red: percentage});
    }
  }
  componentWillReceiveProps(nextProps) {
    this.calculatePower(nextProps.totalPower);
  }
  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-success" style={{width: this.state.green}}>
        </div>
        <div className="progress-bar progress-bar-warning" style={{width: this.state.yellow}}>
        </div>
        <div className="progress-bar progress-bar-danger" style={{width: this.state.red}}>
        </div>
      </div>
    )
  }
}