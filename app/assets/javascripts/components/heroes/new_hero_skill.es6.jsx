class NewHeroSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {confirmable: false}
    this.checkValue = this.checkValue.bind(this);
  }
  checkValue(event) {
    let inputTarget;
    if(event == undefined) {
      inputTarget = $('#skill-name').val();
    } else {
      inputTarget = event.target.value;
    }
    if(inputTarget.length > 0) {
      this.setState({confirmable: true})
    } else {
      this.setState({confirmable: false})
    }
  }
  componentWillReceiveProps(nextProps) {
    this.checkValue();
  }
  render() {
    return (
      <div className={this.props.visible ? "" : "hidden"}>
        Skill name: 
        <div className="input-group input-group-sm">
          <input id="skill-name" onChange={this.checkValue} type="text" className="form-control"/>
        </div> 
        <br />
        Skill power:
        <div className="input-group input-group-sm">
          <select id="skill-power" name="power" className="form-control">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <br />
        Skill element:
        <div className="input-group input-group-sm">
          <select id="skill-element" name="element" className="form-control">
            <option value="wind">wind</option>
            <option value="water">water</option>
            <option value="earth">earth</option>
            <option value="fire">fire</option>
          </select>
        </div>
        <br />
        <button disabled={!this.state.confirmable} className="btn btn-success" onClick={this.props.addSkill}>
          Confirm
        </button>
      </div>
    )
  }
}