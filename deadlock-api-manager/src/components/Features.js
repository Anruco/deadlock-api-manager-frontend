import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

function Features() {
  return (
    <Container id="features" sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Características principales
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">🚀 Rápido</Typography>
              <Typography paragraph>
                Rendimiento optimizado para la mejor experiencia.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">🔒 Seguro</Typography>
              <Typography paragraph>
                Protección avanzada para tus datos y usuarios.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">📱 Responsive</Typography>
              <iframe src="https://steamdb.info/app/1422450/charts/"></iframe>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Features;