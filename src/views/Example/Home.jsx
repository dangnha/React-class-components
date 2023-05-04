import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  handleDelete = (item) => {
    this.props.deleteUser(item);
  };

  handleCreate = () => {
    this.props.createUser();
  };

  render() {
    {
      console.log(this.props);
    }
    let listUsers = this.props.dataRedux;
    return (
      <>
        {" "}
        <div>Welcome to kufu's website!</div>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div className="user" key={item.id}>
                {index + 1} - {item.name}{" "}
                <span onClick={() => this.handleDelete(item)}> X </span>
              </div>
            );
          })}
        <button onClick={() => this.handleCreate()}>Add New user</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    createUser: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
