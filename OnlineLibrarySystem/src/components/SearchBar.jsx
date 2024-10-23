import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or author"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
