class HeroListItem extends React.Component {
  constructor(props) {
    super(props)
    this.currentHeroPresent = this.currentHeroPresent.bind(this);
  }
  currentHeroPresent() {
    if($.inArray(this.props.id, this.props.presentHeroesID) == -1) {
      return false
    } else {
      return true
    }
  }
  render() {
    let heroSkills = [];
    if(this.props.skills) {
      this.props.skills.map(function(element, index) {
        heroSkills.push(<li key={index} className="list-group-item">
                          <b>{element.name}</b> | {element.level}/5 | {element.element}
                        </li>);
      }); 
    }
    return (
      <div className={this.currentHeroPresent() ? "hidden" : ""}>
        <a className="list-group-item">
          <div className="center-block text-center">
            <h4>{`${this.props.firstName} ${this.props.lastName}`}</h4>
            <img height="100" width="100" src={this.props.avatarSrc}/>
          </div>
          <div className={`center-block text-center ${this.props.battlefield ? "hidden" : ""}`}>
            <button id={this.props.id} disabled={this.props.hostDisabled} onClick={this.props.sendHost} className="btn btn-info">Send as a host</button>
            <button id={this.props.id} disabled={this.props.guestDisabled} onClick={this.props.sendGuest} className="btn btn-warning">Send as a guest</button>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <b>Description:</b>
              <ul className="list-group">
                <li className="list-group-item">
                  {this.props.description}
                </li>
              </ul>
              <b>Skills:</b>
              <ul className="list-group">
                {heroSkills}
                <PowerBar skills={this.props.skills} totalPower={4}/>
              </ul>
              <b>Experience:</b>
                <ExperienceBar level={this.props.level} experience={this.props.experience}/>
            </div>
          </div>
        </a>
      </div>
    )
  }
}