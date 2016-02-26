class NewFightWindow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="col-md-8">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">Battleground</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-5 pull-left text-left">
              <h4>Host corner</h4>
            </div>
            <div className="col-md-2 center-block text-center">
              <span className="glyphicon glyphicon-flash" style={{"fontSize": "2em"}}></span>
              <br />
            </div>
            <div className="col-md-5 pull-right text-right">
              <h4>Guest corner</h4>
            </div>
            <hr />
            <FightPredictions host={this.props.host} guest={this.props.guest}/>
            <div className="center-block text-center">
              <button disabled={!(this.props.guest && this.props.host)} onClick={this.props.submitFight} className="btn btn-lg btn-success">Fight!</button>
            </div>
            <div className="col-md-6 pull-left host-oponnet">
              <button onClick={this.props.removeHost} className={`${this.props.host ? "" : "hidden"} text-center center-block btn btn-danger`}>
                Remove host
              </button>
              <hr />
              <OponentWindow hero={this.props.host}/>
            </div>
            <div className="col-md-6 pull-right guest-oponnet">
              <button onClick={this.props.removeGuest} className={`${this.props.guest ? "" : "hidden"} text-center center-block btn btn-danger`}>
                Remove guest
              </button>
              <hr />
              <OponentWindow hero={this.props.guest}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}