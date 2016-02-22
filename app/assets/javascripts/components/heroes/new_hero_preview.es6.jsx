class NewHeroPreview extends React.Component {
  constructor(props) {
    super(props);
    this.checkProps = this.checkProps.bind(this);
  }
  checkProps() {
    if(this.props.firstName.length > 0 || 
      this.props.lastName > 0 || 
      this.props.description.length > 0) {
      return true
    } else {
      return false
    }
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
                <li className="list-group-item">Power: 100%
                  <PowerBar />
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}