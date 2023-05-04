import React from "react";
import ChildComponent from "./ChildComponent.js";
import FormJob from "./FormJob.js";

class MyComponent extends React.Component {
  state = {
    listJob: [
      { id: "job01", role: "dev", salary: "2000$" },
      { id: "job02", role: "tester", salary: "1000$" },
      { id: "job03", role: "manager", salary: "4000$" },
    ],
  };

  addJob = (job) => {
    this.setState({
      listJob: [...this.state.listJob, job],
    });
  };

  DeleteJob = (job) => {
    let currentJob = this.state.listJob;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      listJob: currentJob,
    });
  };
  /* 
    JSX => return block
    fragment
    */

  // rerender
  render() {
    return (
      <>
        <FormJob addJob={this.addJob} />
        {console.log(this.state.listJob)}
        <ChildComponent
          listJob={this.state.listJob}
          DeleteJob={this.DeleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
