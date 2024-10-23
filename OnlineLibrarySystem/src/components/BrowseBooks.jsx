import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./style.css";

const BrowseBooks = () => {
  const { bookList } = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");
  const { category } = useParams();
  const [searchClicked, setSearchClicked] = useState(false);

  const categoryFilteredBooks = category
    ? bookList.filter(
        (book) => book.category?.toLowerCase() === category.toLowerCase()
      )
    : bookList;

  const filteredBooks = categoryFilteredBooks.filter(
    (book) =>
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (searchClicked || searchTerm === "")
  );
  const handleSearch = () => {
    setSearchClicked(true);
  };
  return (
    <div className="browse-books-container">
      <h1 className="browse-books-title">Browse Books</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <div className="books-grid">
        {filteredBooks.map((book, index) => (
          //
          <div key={index} className="book-card">
            <img
              src={book.coverImage}
              alt={book.title}
              style={{ width: "100px" }}
              className="book-cover"
            />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <Link
              to={`/book-details/${book.title}`}
              className="view-details-link"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="back">Back to Home</button>
      </Link>
    </div>
  );
};

export default BrowseBooks;
