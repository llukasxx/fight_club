class ExperienceBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {experience: "0%"}
    this.calculateExpBar = this.calculateExpBar.bind(this);
  }
  calculateExpBar(level, experience) {
    switch(level) {
      case 1:
        let exp = experience;
        return `${exp*100/30}%`
        break;
      case 2:
        exp = experience;
        return `${exp*100/90}%`
        break;
      case 3:
        exp = experience;
        return `${exp*100/270}%`
        break;
      case 4:
        exp = experience;
        return `${exp*100/810}%`
        break;
      case 5:
        exp = experience;
        return `${exp*100/2430}%`
        break;
      case 6:
        return "100%"
        break;
    };
  }
  componentDidMount() {
    this.setState({experience: this.calculateExpBar(this.props.level, this.props.experience)});
  }
  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-success progress-bar-striped" 
        role="progressbar" aria-valuenow="40" aria-valuemin="0" 
        aria-valuemax="100" style={{width: this.state.experience}}>
        <span className="black">level{this.props.level}</span>
        </div>
      </div>
    )
  }
}