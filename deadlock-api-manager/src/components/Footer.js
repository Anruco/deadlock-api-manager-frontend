import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        textAlign: 'center', 
        backgroundColor: '#282c34', 
        color: '#fff',
        mt: 5
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Mi Landing Page. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;