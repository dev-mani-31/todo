import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import TodoAdd from "./components/TodoAdd";
import TodoEdit from "./components/TodoEdit";
import TodoList from "./components/TodoList";
import Testing from "./components/Testing";

import NavAboveNav from "./components/NavAboveNav";

export default function app() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<TodoList />} />
        <Route path="/edit/:id" exact element={<TodoEdit />} />
        <Route path="/add" exact element={<TodoAdd />} />
        <Route path="/testing" exact element={<Testing />} />

        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}
