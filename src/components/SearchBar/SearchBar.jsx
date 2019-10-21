import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Searchbar = (props) => {
  const [searchValue, setSearchValue] = useState('');


  return (
    <MuiThemeProvider>
      <SearchBar
        onChange={(value) => setSearchValue(value)}
        onRequestSearch={() => props.onSearchResultChange(searchValue)}
        style={{
          margin: '0 auto',
        }}
      />
    </MuiThemeProvider>
  );
};

export default Searchbar;
