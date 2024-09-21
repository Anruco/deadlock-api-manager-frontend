import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          DeadLock
        </Typography>
        <Button color="inherit" href="#features">Características</Button>
        <Button color="inherit" href="#contact">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;