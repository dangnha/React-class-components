import React from "react";

class FormJob extends React.Component {
  state = {
    role: "",
    salary: "",
  };
  handleOnChangeJob = (event) => {
    this.setState({
      role: event.target.value,
    });
  };
  handleOnChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.salary || !this.state.role) {
      alert("Please fill the form");
      return;
    }
    this.props.addJob({
      id: Math.floor(Math.random() * 100),
      role: this.state.role,
      salary: this.state.salary,
    });
    this.setState({
      role: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname"> Job's title: </label>
        <br />
        <input
          type="text"
          value={this.state.role}
          onChange={(event) => this.handleOnChangeJob(event)}
        />
        <br />
        <label htmlFor="lname"> Salary </label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleOnChangeSalary(event)}
        />
        <br />
        <input
          type="submit"
          onClick={(event) => this.handleSubmit(event)}
        />{" "}
      </form>
    );
  }
}

export default FormJob;
