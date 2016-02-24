class NewHero extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {firstName: "", lastName: "", description: "", 
                   skills: [], addSkillVisible: false,
                   sendable: false, 
                   validations: {validFields: false, 
                                 validSkills: false, 
                                 validPower: false}};
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.addSkillForm = this.addSkillForm.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.validateSkills = this.validateSkills.bind(this);
    this.validatePower = this.validatePower.bind(this);
    this.totalPower = this.totalPower.bind(this);
    this.checkValidations = this.checkValidations.bind(this);
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
    document.getElementById("skill-element").value = "wind";
  }
  addSkill(event) {
    event.preventDefault();
    let skillName = document.getElementById("skill-name").value;
    let skillPower = document.getElementById("skill-power").value;
    let skillElement = document.getElementById("skill-element").value;
    let tempSkills = this.state.skills;
    tempSkills.push({skillName: skillName, skillPower: parseInt(skillPower), skillElement: skillElement});
    this.setState({skills: tempSkills});
    this.addSkillForm(event);
    this.checkValidations();
  }
  removeSkill(event) {
    let skillIndex = event.currentTarget.id;
    let tempSkills = this.state.skills;
    tempSkills.splice(skillIndex, 1);
    this.setState({skills: tempSkills});
    this.checkValidations();
  }
  validateFields() {
    let tempValidation = this.state.validations;
    if(this.state.firstName.length > 0 && this.state.lastName.length > 0 
    && this.state.description.length > 0) {
      tempValidation.validFields = true;
    } else {
      tempValidation.validFields = false;
    }
    this.setState({validations: tempValidation});
  }
  validateSkills() {
    let tempValidation = this.state.validations;
    if(this.state.skills.length >= 3 && this.state.skills.length <= 10) {
      tempValidation.validSkills = true;
    } else {
      tempValidation.validSkills = false;
    }
    this.setState({validations: tempValidation});
  }
  validatePower() {
    let tempValidation = this.state.validations;
    if(this.totalPower() >= 5 && this.totalPower() <= 10) {
      tempValidation.validPower = true;
    } else {
      tempValidation.validPower = false;
    }
    this.setState({validations: tempValidation});
  }
  totalPower() {
    let totalPower = 0;
    this.state.skills.map(function(element) {
      totalPower += element.skillPower;
    })
    return totalPower;
  }
  checkValidations() {
    this.validateFields();
    this.validateSkills();
    this.validatePower();

    let validFields = this.state.validations.validFields;
    let validSkills = this.state.validations.validSkills;
    let validPower = this.state.validations.validPower;
    

    if(validFields && validSkills && validPower) {
      this.setState({sendable: true});
    } else {
      this.setState({sendable: false});
    }
  }
  submitHero(event) {
    event.preventDefault();
    console.log(this.state)
  }
  render () {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-1">
          <h2 className="text-center">New Hero creator</h2>
          <form onKeyUp={this.checkValidations}>
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
              {this.state.addSkillVisible ? "Cancel " : "Add skill "} 
              <span className={`glyphicon glyphicon-${this.state.addSkillVisible ? "remove" : "plus"}`}/>
            </button>
            <hr />
            <button disabled={this.state.sendable ? "" : true} onClick={this.submitHero} className="btn btn-success btn-lg center-block">Sign new Hero</button>
          </form>
        </div>
        <NewHeroPreview firstName={this.state.firstName} 
                        lastName={this.state.lastName} 
                        description={this.state.description}
                        skills={this.state.skills}
                        removeSkill={this.removeSkill}
                        totalPower={this.totalPower()}
                        validations={this.state.validations}/>
      </div>
    );
  }
}