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
          React & Materail-UI Sample Application
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
