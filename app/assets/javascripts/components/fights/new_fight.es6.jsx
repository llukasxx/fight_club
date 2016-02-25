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
      heroes.push(<a key={index} className="list-group-item">
                    {`${element.first_name} ${element.last_name}`}
                    <span className="pull-right glyphicon glyphicon-circle-arrow-down"></span>
                  </a>)
    });
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-heading">Hero selection</div>
            <div className="panel-body">
              <p>In order to start a fight select two heroes from list below.</p>
            </div>

            <div className="list-group" onClick={this.handleHero}>
              {heroes}
            </div>
          </div>
        </div>
      </div>
    )
  }
}