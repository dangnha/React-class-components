import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnclickDelete = (job) => {
    this.props.DeleteJob(job);
  };

  render() {
    let { listJob } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {!showJobs ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {listJob.map((job, index) => {
                return (
                  <div key={job.id}>
                    {index + 1} - {job.role} - {job.salary} <></>{" "}
                    <span onClick={() => this.handleOnclickDelete(job)}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
