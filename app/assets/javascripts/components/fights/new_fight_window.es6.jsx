class NewFightWindow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="col-md-6 col-md-offset-1">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">Battelground</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-2 pull-left host">
              Host
            </div>
            <div className="col-md-1 center-block">
              <span className="glyphicon glyphicon-flash"></span>
            </div>
            <div className="col-md-2 pull-right">
              Guest
            </div>
            <hr />
            <div className="col-md-2 pull-left host-oponnet">
              <OponentWindow/>
            </div>
            <div className="col-md-2 pull-right host-oponnet">
              <OponentWindow/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}