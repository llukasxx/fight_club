class NewHeroPreview extends React.Component {
  constructor(props) {
    super(props);
    this.totalPower = this.totalPower.bind(this);
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
        <div>
          <div className="panel panel-default">
              <div className="panel-heading"><b>{`${this.props.firstName} ${this.props.lastName}`}</b></div>
              <div className="panel-body">
                <p>{this.props.description}</p>
              </div>

              <ul className="list-group">
                <li className="list-group-item"><b>Skills:</b>
                  {this.props.skills.map(function(element, index) {
                    return (<div key={index} className="btn-group"  style={{padding: "0px 0px 5px 5px"}}>
                              <button type="button" className={`btn btn-sm ${element.skillElement}`}>{`${element.skillName} ${element.skillPower}/5`}</button>
                              <button id={index} onClick={this.props.removeSkill} type="button" className={`btn  btn-sm ${element.skillElement}`}>
                                <span className="glyphicon glyphicon-remove"></span>
                              </button>
                            </div>)
                  }, this)}
                </li>
                <li className="list-group-item"><b>Total power:</b> {this.totalPower()}/10
                  <PowerBar skills={this.props.skills} totalPower={this.totalPower()}/>
                </li>
                <li className="list-group-item">
                  <b>Every hero must abide following rules:</b>
                  <NewHeroValidation firstName={this.props.firstName} 
                                     lastName={this.props.lastName}
                                     description={this.props.description}
                                     skills={this.props.skills}
                                     totalPower={this.totalPower()}/>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}