import React from "react";
import axios from "axios";
import "./style.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log(res.data.data);
    // });
    let res = await axios.get("https://reqres.in/api/users?page=1");
    console.log(res.data.data);
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUser = (user) => {
    this.props.history.push(`/User/${user.id}`);
  };

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-users-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1} | {item.first_name} {item.last_name}{" "}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
