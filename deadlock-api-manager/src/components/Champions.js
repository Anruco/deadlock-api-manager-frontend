

import React from 'react';
import '../styles/ChampionList.css'; // Archivo CSS para el estilo


// Componente de la tarjeta del campeón (burbuja)
const ChampionCard = ({ champion }) => {
  return (
    <div className="champion-card">
      <img
        src={champion.image}
        alt={champion.name}
        className="champion-image"
      />
      <div className="champion-name">{champion.name}</div>
    </div>
  );
};

// Componente principal que renderiza la lista de campeones
const ChampionList = ({ champions }) => {
    if (!champions || champions.length === 0) {
        return <div>No hay campeones disponibles</div>;
      }
  return (
    <div className="champion-list">
      {champions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </div>
  );
};

export default ChampionList;
