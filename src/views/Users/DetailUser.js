import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./style.scss";

class DetailUser extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://reqres.in/api/users/${id}`);

      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleBackUserPage = () => {
    this.props.history.push(`/User`);
  };

  render() {
    let { user } = this.state;
    let isEmptyObject = Object.keys(user).length === 0;
    console.log(user);
    return (
      <div className="list-users-container">
        <div className="title">Show user information</div>
        <div className="list-user-content">
          {isEmptyObject === false && (
            <>
              <div className="child">
                Name: {user.first_name} {user.last_name}
              </div>
              <div className="child">Email: {user.email}</div>
              <div className="child">
                <img src={user.avatar} alt="" />
              </div>
              <div className="child" onClick={() => this.handleBackUserPage()}>
                Back
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(DetailUser);
