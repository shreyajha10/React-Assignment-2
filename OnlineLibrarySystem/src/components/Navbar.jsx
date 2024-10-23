import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/browse">Browse Books</Link>
        </li>
        <li className="navbar-item">
          <Link to="/add">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
