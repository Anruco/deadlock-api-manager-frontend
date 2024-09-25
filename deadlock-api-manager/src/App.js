// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
/* import Features from './pages/Features';
import Contact from './pages/Contact'; */

function App() {
  return (
    <Router>
      {/* Header es común para todas las páginas */}
      <Header />
      
      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
       {/*  <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
