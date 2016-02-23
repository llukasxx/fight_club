class NewHeroValidation extends React.Component {
  constructor(props) {
    super(props);
    this.validateFields = this.validateFields.bind(this);
    this.validateSkills = this.validateSkills.bind(this);
    this.validatePower = this.validatePower.bind(this);
  }
  validateFields() {
    if(this.props.firstName.length > 0 
      && this.props.lastName.length > 0 
      && this.props.description.length > 0) {
      return true
    } else {
      return false
    }
  }
  validateSkills() {
    if(this.props.skills.length >= 3 && this.props.skills.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
  validatePower() {
    if(this.props.totalPower >= 5 && this.props.totalPower <= 10) {
      return true
    } else {
      return false
    }
  }
  render() {
    return(
      <ul className="list-group">
        <li className={`list-group-item list-group-item-${this.validateFields() ? "success" : "danger"}`}>
          <span className={`glyphicon glyphicon-${this.validateFields() ? "ok" : "remove"}`}></span>
          Hero's first name, last name, avatar and description must be present.
        </li>
        <li className={`list-group-item list-group-item-${this.validateSkills() ? "success" : "danger"}`}>
          <span className={`glyphicon glyphicon-${this.validateSkills() ? "ok" : "remove"}`}></span>
          Hero must have at least 3 skills, but not more than 10.
        </li>
        <li className={`list-group-item list-group-item-${this.validatePower() ? "success" : "danger"}`}>
          <span className={`glyphicon glyphicon-${this.validatePower() ? "ok" : "remove"}`}></span>
          Hero's total power cannot be less than 5 and greater than 10.
        </li>
      </ul>
    )
  }
}