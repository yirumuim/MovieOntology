import React from 'react';
import './SearchBar.css';

function Searchbar() {
  return (
    <div>
      <div className="searchbar">
        <input id="search_query" name="query" type="text" />
        <button id="search_button" type="submit" title="검색">검색</button>
      </div>
    </div>
  );
}

export default Searchbar;
