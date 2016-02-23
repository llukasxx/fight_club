class NewHeroPreview extends React.Component {
  constructor(props) {
    super(props);
    this.checkProps = this.checkProps.bind(this);
    this.totalPower = this.totalPower.bind(this);
  }
  checkProps() {
    if(this.props.firstName.length > 0 
      || this.props.lastName.length > 0 
      || this.props.description.length > 0
      || this.props.skills.length > 0) {
      return true
    } else {
      return false
    }
  }
  skillColor(power) {
    if(power < 3) {
      return "btn btn-success"
    } else if (power > 2 && power < 5) {
      return "btn btn-warning"
    } else {
      return "btn btn-danger"
    }
  }
  totalPower() {
    let totalPower = 0;
    this.props.skills.map(function(element) {
      totalPower += element.skillPower;
    })
    return totalPower;
  }
  render () {
    return (
      <div className="col-md-4 col-md-offset-1">
        <h2>Hero Preview</h2>
        <div className={this.checkProps() ? "" : "hidden"}>
          <div className="panel panel-default">
              <div className="panel-heading"><b>{`${this.props.firstName} ${this.props.lastName}`}</b></div>
              <div className="panel-body">
                <p>{this.props.description}</p>
              </div>

              <ul className="list-group">
                <li className="list-group-item"><b>Skills:</b>
                  {this.props.skills.map(function(element, index) {
                    return (<div key={index} className="btn-group"  style={{padding: "0px 0px 5px 5px"}}>
                              <button type="button" className={`btn ${this.skillColor(element.skillPower)} btn-sm`}>{`${element.skillName} ${element.skillPower}/5`}</button>
                              <button id={index} onClick={this.props.removeSkill} type="button" className={`btn ${this.skillColor(element.skillPower)} btn-sm`}>
                                <span className="glyphicon glyphicon-minus"></span>
                              </button>
                            </div>)
                  }, this)}
                </li>
                <li className="list-group-item"><b>Total power:</b> {this.totalPower()}/10
                  <PowerBar totalPower={this.totalPower()}/>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}