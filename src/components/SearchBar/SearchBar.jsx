import React from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function Searchbar() {
  return (
    <MuiThemeProvider>
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
        }}
      />
    </MuiThemeProvider>
  );
}

export default Searchbar;
