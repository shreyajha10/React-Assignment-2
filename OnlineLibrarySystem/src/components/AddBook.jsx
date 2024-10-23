import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addBook } from "../utils/booksSlice";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && description && coverImage) {
      dispatch(addBook({ title, author, description, coverImage }));
      navigate("/browse");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="add-book-container">
      <form onSubmit={handleSubmit} className="add-book-form">
        <h1 className="add-book-title">Add a New Book</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input-field"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea-field"
          required
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="file-input"
        />
        <button type="submit" className="submit-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
