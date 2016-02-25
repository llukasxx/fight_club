class HeroSkill extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.skillName}
      </div>
    )
  }
}