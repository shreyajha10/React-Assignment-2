import React from "react";
import { Link } from "react-router-dom";
import Books from "../utils/books";

import "./style.css";

const PopularBooks = () => {
  return (
    <div className="popular-books-section">
      <h2 className="popular-books-title">Popular Books</h2>
      <ul className="popular-books-list">
        {Books.slice(0, 5).map((book, index) => (
          <li key={index} className="popular-book-item">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">By {book.author}</p>
            <Link
              to={`/book-details/${book.title}`}
              className="view-details-link"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBooks;
