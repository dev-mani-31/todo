import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <article className="todo">
          <h3>
            <Link to="/add">Add Item</Link>
          </h3>
          <h3>
            <Link to="/">Todo List</Link>
          </h3>
        </article>
        <article className="login">
          <h3>
            <Link to="/login">Login</Link>
          </h3>
          <h3>
            <Link to="/signup">Signup</Link>
          </h3>
          <h3>
            <Link to="/testing">Testing </Link>
          </h3>
        </article>
      </div>
    );
  }
}
