import React from 'react';
import { Container, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel

function Hero() {
  const images = [
    '/Images/Pablo.jpg',
    '/Images/Bombillas.jpg',
    '/Images/Robos.jpg',
  ];

  return (
    <Box sx={{ position: 'relative', height: '70vh' }}>
      {/* Carrusel de imágenes */}
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={9000}
        showStatus={false}
        stopOnHover={false}
        swipeable={true}
        dynamicHeight={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Background ${index + 1}`}
              style={{ height: '70vh', width: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>

      {/* Contenido del Hero (por encima del carrusel) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        }}
      >
        <Container>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;