class FightResult extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if(this.props.fightPerformed) {
      return(
        <div>
          <div className="alert alert-success" role="alert">
            <b>{`${this.props.winner.first_name} ${this.props.winner.last_name}`}</b> has won the fight in <b>{this.props.fight.weather}</b> weather with {this.props.fight.winner_chance}% chance, and gained {this.props.fight.gained_exp} points of experience.
          </div>
        </div>
      )
    }
    else {
      return(
        <div>
        </div>
      )
    }
  }
}