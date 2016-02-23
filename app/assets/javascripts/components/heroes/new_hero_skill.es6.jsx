class NewHeroSkill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.visible ? "" : "hidden"}>
        Skill name: 
        <div className="input-group input-group-sm">
          <input id="skill-name" type="text" className="form-control"/>
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
        <button className="btn btn-success" onClick={this.props.addSkill}>
          Confirm
        </button>
      </div>
    )
  }
}