class ExperienceBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {experience: "0%"}
    this.calculateExpBar = this.calculateExpBar.bind(this);
  }
  calculateExpBar(level, experience) {
    let exp = experience;
    switch(level) {
      case 1:
        return `${exp*100/30}%`
        break;
      case 2:
        return `${exp*100/90}%`
        break;
      case 3:
        return `${exp*100/270}%`
        break;
      case 4:
        return `${exp*100/810}%`
        break;
      case 5:
        return `${exp*100/2430}%`
        break;
      case 6:
        return "100%"
        break;
      default:
        return "0%"
        break;
    };
  }
  componentDidMount() {
    this.setState({experience: this.calculateExpBar(this.props.level, this.props.experience)});
  }
  componentWillReceiveProps(nextProps) {
    this.setState({experience: this.calculateExpBar(nextProps.level, nextProps.experience)});
  }
  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-success progress-bar-striped" 
        role="progressbar" aria-valuenow="40" aria-valuemin="0" 
        aria-valuemax="100" style={{width: this.state.experience}}>
        <span className="black pull-left">level{this.props.level}</span>
        </div>
      </div>
    )
  }
}