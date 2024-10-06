import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import logo from '../assets/logo.png';

const TopBar = () => {
  return (
    <AppBar position="static" style={{ background: '#0A0910' }}>
      <Toolbar>
        <Box
          component="img"
          src={logo} // Replace with your logo URL
          alt="Logo"
          sx={{
            height: 40, // Adjust the height of the logo
            marginRight: 2, // Space between the logo and text
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
