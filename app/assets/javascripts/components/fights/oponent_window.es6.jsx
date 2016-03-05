class OponentWindow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={this.props.hero ? "" : "hidden"}>
        <HeroListItem avatarSrc={this.props.hero.avatar_url} skills={this.props.hero.skills}
                      description={this.props.hero.description} id={this.props.hero.id}
                      firstName={this.props.hero.first_name} lastName={this.props.hero.last_name}
                      level={this.props.hero.level} experience={this.props.hero.experience}
                      battlefield={true} />
      </div>
    )
  }
}