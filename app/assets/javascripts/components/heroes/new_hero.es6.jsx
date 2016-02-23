class NewHero extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {firstName: "", lastName: "", description: "", skills: [], addSkillVisible: false };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.addSkillForm = this.addSkillForm.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.submitHero = this.submitHero.bind(this);
  }
  handleFirstName(event) {
    let firstName = event.target.value;
    this.setState({firstName: firstName});
  }
  handleLastName(event) {
    let lastName = event.target.value;
    this.setState({lastName: lastName});
  }
  handleDescription(event) {
    let description = event.target.value;
    this.setState({description: description});
  }
  addSkillForm(event) {
    event.preventDefault();
    let toggle = !this.state.addSkillVisible;
    this.setState({addSkillVisible: toggle});
    // Resetting value of skill inputs
    document.getElementById("skill-name").value = "";
    document.getElementById("skill-power").value = 0;
  }
  addSkill(event) {
    event.preventDefault();
    let skillName = document.getElementById("skill-name").value;
    let skillPower = document.getElementById("skill-power").value;
    let tempSkills = this.state.skills;
    tempSkills.push({skillName: skillName, skillPower: parseInt(skillPower)});
    this.setState({skills: tempSkills});
    this.addSkillForm(event);
  }
  removeSkill(event) {
    let skillIndex = event.currentTarget.id;
    let tempSkills = this.state.skills;
    tempSkills.splice(skillIndex, 1);
    this.setState({skills: tempSkills});
  }
  submitHero(event) {
    event.preventDefault();
    console.log('hero')
  }
  render () {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-1">
          <h2 className="text-center">New Hero creator</h2>
          <form>
            First name:<br />
            <input type="text" 
                   className="form-control"
                   name="firstName"
                   value={this.state.firstName}
                   onChange={this.handleFirstName}/><br />
            Last name:<br />
            <input type="text" 
                   className="form-control"
                   name="lastName"
                   value={this.state.lastName}
                   onChange={this.handleLastName}/><br />
            Hero description:<br />
            <textarea type="text" 
                      className="form-control" 
                      rows="5"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleDescription}/><br />
            <NewHeroSkill visible={this.state.addSkillVisible} 
                          addSkill={this.addSkill}/>
            <br />
            <button className={`btn btn-${this.state.addSkillVisible ? "danger" : "info"}`} onClick={this.addSkillForm}>
              {this.state.addSkillVisible ? "Cancel" : "Add skill"} 
              <span className={`glyphicon glyphicon-${this.state.addSkillVisible ? "minus" : "plus"}`}/>
            </button>
            <hr />
            <button onClick={this.submitHero} className="disabled btn btn-success btn-lg center-block">Sign new Hero</button>
          </form>
        </div>
        <NewHeroPreview firstName={this.state.firstName} 
                        lastName={this.state.lastName} 
                        description={this.state.description}
                        skills={this.state.skills}
                        removeSkill={this.removeSkill}/>
      </div>
    );
  }
}