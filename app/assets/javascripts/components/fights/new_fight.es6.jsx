class NewFight extends React.Component {
  constructor(props) {
    super(props);
    this.handleHero = this.handleHero.bind(this);
  }
  handleHero(event) {
    target = event.target;
    console.log(target);
  }
  render() {
    let heroes = [];
    this.props.heroes.map(function(element, index) {
      heroes.push(<HeroListItem key={index} avatarSrc={element.hero.avatar_url} skills={element.hero.skills}
                                description={element.hero.description}
                                firstName={element.hero.first_name} lastName={element.hero.last_name}/>);
    })
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1">
          <div className="panel panel-info">
            <div className="panel-heading"><b>Hero selection</b></div>
            <div className="panel-body">
              <p>In order to start a fight select two heroes from list below.</p>
            </div>

            <div className="list-group" onClick={this.handleHero}>
              {heroes}
            </div>
          </div>
        </div>
        <NewFightWindow />
      </div>
    )
  }
}