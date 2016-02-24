class NewHeroPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="col-md-4 col-md-offset-1">
        <h2>Hero Preview</h2>
        <div>
          <div className="panel panel-info">
              <div className="panel-heading"><h4><b>{`${this.props.firstName} ${this.props.lastName}`}</b></h4></div>
              <div className="panel-body">
                <img id="avatar-preview"/>
                <hr />
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
                <li className="list-group-item"><b>Total power:</b> {this.props.totalPower}/10
                  <PowerBar skills={this.props.skills} totalPower={this.props.totalPower}/>
                </li>
                <li className="list-group-item">
                  <b>Every hero must abide following rules:</b>
                  <NewHeroValidation firstName={this.props.firstName} 
                                     lastName={this.props.lastName}
                                     description={this.props.description}
                                     skills={this.props.skills}
                                     totalPower={this.props.totalPower}
                                     validations={this.props.validations}/>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}