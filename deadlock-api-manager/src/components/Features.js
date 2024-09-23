import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import ChampionList from './Champions';

function Features() {
  const champions = [
    { id: 1, name: "Bombillon", image: "/Images/Bombillon.png" },
    { id: 2, name: "Robos", image: "/Images/Robos.png" },
    { id: 3, name: "Pablo", image: "/Images/Pablo.png" },
    // ...más campeones
  ];
  return (
    <Container id="features" sx={{ py: 5 }}>
    <Typography variant="h4" component="h2" gutterBottom align="center">
      Lista de Campeones
    </Typography> 
    {/* Pasamos la lista de campeones como prop */}
    <ChampionList champions={champions} />
  </Container>
);
}

export default Features;