class HeroListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let heroSkills = [];
    this.props.skills.map(function(element, index) {
      heroSkills.push(<li key={index} className="list-group-item">
                        <b>{element.name}</b> | {element.level}/5 | {element.element} 
                      </li>);
    });
    return (
      <div>
        <a className="list-group-item">
          <div className="center-block text-center">
            <h4>{`${this.props.firstName} ${this.props.lastName}`}</h4>
            <img height="100" width="100" src={this.props.avatarSrc}/>
          </div>
          <div className="center-block text-center">
            <button className="btn btn-info">Send as a host</button>
            <button className="btn btn-warning">Send as a guest</button>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              Skills:
              <ul className="list-group">
                {heroSkills}
              </ul>
              Experience:
              <ul className="list-group">

              </ul>
            </div>
          </div>
        </a>
      </div>
    )
  }
}