import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles//Header.css'; // Asegúrate de crear este archivo CSS

function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <img
          src="/Images/Deadlock.webp"
          alt="Logo"
          className="header-logo"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
