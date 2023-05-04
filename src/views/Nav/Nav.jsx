import React, { Component } from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeClassName="active" to="/Home" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/Todo">
          To Do List
        </NavLink>
        <NavLink activeClassName="active" to="/About">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/User">
          Users
        </NavLink>

        {/* <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
      </div>
    );
  }
}

export default Nav;
