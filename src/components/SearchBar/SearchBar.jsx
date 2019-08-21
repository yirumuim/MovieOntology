import React from 'react';
import './SearchBar.css';

function Searchbar() {
  return (
    <div>
      <div className="searchbar">
        <input id="query" name="query" type="text" />
        <button id="s_btn" type="submit" title="검색">검색</button>
      </div>
    </div>
  );
}

export default Searchbar;
