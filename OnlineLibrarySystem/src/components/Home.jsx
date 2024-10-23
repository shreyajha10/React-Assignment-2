import React from "react";

import PopularBooks from "./PopularBooks";
import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Online Library</h1>
      <h2 className="categories-title">Categories</h2>
      <ul className="categories-list">
        <li className="category-item">
          <Link to="/books/fiction" className="category-link">
            Fiction
          </Link>
        </li>
        <li className="category-item">
          <Link to="/books/non-fiction" className="category-link">
            Non-Fiction
          </Link>
        </li>
        <li className="category-item">
          <Link to="/books/sci-fi" className="category-link">
            Sci-fi
          </Link>
        </li>
      </ul>
      <PopularBooks />
    </div>
  );
};

export default Home;
