// src/components/Header.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import '../styles//Header.css'; // Asegúrate de crear este archivo CSS

function Header() {
  // Estado para controlar la pestaña seleccionada
  const [value, setValue] = useState(0);

  // Manejar el cambio de pestañas
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <img
          src="/Images/Deadlock.webp"
          alt="Logo"
          style={{ height: '50px', marginRight: '20px' }}
        />
{/* Botones de navegación */}
<div>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/features">
            Características
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contacto
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
