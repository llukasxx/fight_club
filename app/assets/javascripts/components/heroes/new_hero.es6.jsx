class NewHero extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {firstName: "", lastName: "", description: "", skills: {} };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
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
            <button className="btn btn-success btn-lg center-block">Sign new Hero</button>
          </form>
        </div>
        <NewHeroPreview firstName={this.state.firstName} 
                        lastName={this.state.lastName} 
                        description={this.state.description}/>
      </div>
    );
  }
}