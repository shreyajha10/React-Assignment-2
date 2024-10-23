import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { title } = useParams();
  const { bookList } = useSelector((state) => state.books);
  const book = bookList.find((b) => b.title === title);

  if (!book) return <h2>Book not found!</h2>;

  return (
    <div className="book-details-container">
      <div className="book-details-card">
        <img
          src={book.coverImage}
          alt={book.title}
          style={{ width: "100px" }}
          className="book-cover"
        />
        <h1 className="book-title">{book.title}</h1>
        <h2>{book.author}</h2>
        <p className="book-description">{book.description}</p>
        <Link to="/browse">
          <button className="back">Back to Browse</button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
