import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Typography, Box } from '@mui/material';

function SteamGameDetails() {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);  // Cambiado a un estado booleano

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(
          'https://store.steampowered.com/api/appdetails?appids=1422450'
        );
        const data = response.data['1422450'];
        if (data.success) {
          setGameData(data.data);
        } else {
          setError(true);  // Marca error si los datos no son exitosos
        }
      } catch (err) {
        setError(true);  // Marca error si hay una excepción
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, []);

  // Si está cargando, mostrar un spinner
  if (loading) {
    return <CircularProgress />;
  }

  // Si hay un error, no mostrar nada
  if (error) {
    return null;  // No renderiza nada
  }

  return (
    <Box sx={{ padding: 2 }}>
   https://steamdb.info/app/1422450/charts/ 
    </Box>
  );
}

export default SteamGameDetails;
