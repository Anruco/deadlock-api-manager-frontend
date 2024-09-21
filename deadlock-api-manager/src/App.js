import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import SteamGameDetails from './components/SteamGameDetails';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SteamGameDetails />
      <Features />
      <Footer />
    </div>
  );
}

export default App;