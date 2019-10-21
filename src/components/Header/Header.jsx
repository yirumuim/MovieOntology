import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Header.css';

const Header = () => (
  <div className="Header">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          조커: 20199950 & 엑시트: 20184621
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
