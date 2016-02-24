class NewHeroValidation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ul className="list-group">
        <li className={`list-group-item list-group-item-${this.props.validations.validFields ? "success" : "danger"}`}>
          <span className={`glyphicon glyphicon-${this.props.validFields ? "ok" : "remove"}`}></span>
          Hero's first name, last name and description must be present.
        </li>
        <li className={`list-group-item list-group-item-${this.props.validations.validSkills ? "success" : "danger"}`}>
          <span className={`glyphicon glyphicon-${this.props.validSkills ? "ok" : "remove"}`}></span>
          Hero must have at least 3 skills, but not more than 10.
        </li>
        <li className={`list-group-item list-group-item-${this.props.validations.validPower ? "success" : "danger"}`}>
          <span className={`glyphicon glyphicon-${this.props.validPower ? "ok" : "remove"}`}></span>
          Hero's total power cannot be less than 5 and greater than 10.
        </li>
      </ul>
    )
  }
}