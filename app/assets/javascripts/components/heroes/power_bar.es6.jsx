class PowerBar extends React.Component {
  constructor(props) {
    super(props)
    this.props = {totalPower: 0}
  }
  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-success" style={{width: "50%"}}>
          <span className="sr-only">35% Complete (success)</span>
        </div>
        <div className="progress-bar progress-bar-warning progress-bar-striped" style={{width: "25%"}}>
          <span className="sr-only">20% Complete (warning)</span>
        </div>
        <div className="progress-bar progress-bar-danger" style={{width: "25%"}}>
          <span className="sr-only">10% Complete (danger)</span>
        </div>
      </div>
    )
  }
}