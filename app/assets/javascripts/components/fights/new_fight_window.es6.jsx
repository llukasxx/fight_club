class NewFightWindow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="col-md-9">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">Battleground</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-2 pull-left host text-left">
              Host
            </div>
            <div className="col-md-1 center-block">
              <span className="glyphicon glyphicon-flash"></span>
            </div>
            <div className="col-md-2 pull-right text-right">
              Guest
            </div>
            <hr />
            <div className="col-md-4 pull-left host-oponnet">
              <button onClick={this.props.removeHost} className={`${this.props.host ? "" : "hidden"} text-center center-block btn btn-danger`}>
                Remove host
              </button>
              <hr />
              <OponentWindow hero={this.props.host}/>
            </div>
            <div className="col-md-4 pull-right guest-oponnet">
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