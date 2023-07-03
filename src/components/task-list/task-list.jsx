import React from "react";
import './search.css'

const Search = () => {

  const searchText = 'placeholder';
  const searchStyle = { fontSize: '20px' };

  return (
    <input
      className="search-input"
      style={searchStyle}
      placeholder={searchText} />
  );
};

export default Search;
