class NewFight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {host: false, guest: false, hostDisabled: false, guestDisabled: false};
    this.sendHost = this.sendHost.bind(this);
    this.sendGuest = this.sendGuest.bind(this);
    this.removeHost = this.removeHost.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.submitFight = this.submitFight.bind(this);
  }
  sendHost(event) {
    let hero;
    let id = event.target.id;
    this.props.heroes.map(function(element) {
      if(element.hero.id == id) {
        hero = element.hero;
      }
    });
    this.setState({host: hero, hostDisabled: true})
  }
  sendGuest(event) {
    let hero;
    let id = event.target.id;
    this.props.heroes.map(function(element) {
      if(element.hero.id == id) {
        hero = element.hero;
      }
    });
    this.setState({guest: hero, guestDisabled: true})
  }
  removeHost(event) {
    this.setState({host: false, hostDisabled: false});
  }
  removeGuest(event) {
    this.setState({guest: false, guestDisabled: false});
  }
  submitFight(event) {
    event.preventDefault();
    $.post('/fights', {host_id: this.state.host.id, guest_id: this.state.guest.id})
      .done(function(data) {
        console.log(data);
      });
  }
  render() {
    let heroes = [];
    this.props.heroes.map(function(element, index) {
      heroes.push(<HeroListItem key={index} avatarSrc={element.hero.avatar_url} skills={element.hero.skills}
                                description={element.hero.description} sendHost={this.sendHost} 
                                sendGuest={this.sendGuest} id={element.hero.id}
                                firstName={element.hero.first_name} lastName={element.hero.last_name}
                                presentHeroesID={[this.state.host.id, this.state.guest.id]}
                                hostDisabled={this.state.hostDisabled} guestDisabled={this.state.guestDisabled}/>);
    }, this)
    return (
      <div className="container">
        <div className="col-md-4">
          <div className="panel panel-info">
            <div className="panel-heading"><h3 className="panel-title">Hero Selection</h3></div>
            <div className="panel-body">
              <p>In order to start a fight select two heroes from list below.</p>
            </div>

            <div className="list-group">
              {heroes}
            </div>
          </div>
        </div>
        <NewFightWindow submitFight={this.submitFight} host={this.state.host} guest={this.state.guest} removeHost={this.removeHost} removeGuest={this.removeGuest}/>
      </div>
    )
  }
}