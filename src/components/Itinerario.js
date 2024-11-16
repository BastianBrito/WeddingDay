// src/components/Itinerario.js
import React from 'react';
// import './Itinerario.css'; // Asegúrate de importar el archivo CSS

const Itinerario = () => {
  const actividades = [
    { hora: '00:00', evento: 'Llegada' },
    { hora: '00:30', evento: 'Cóctel' },
    { hora: '01:00', evento: 'Ceremonia' },
    { hora: '02:00', evento: 'Fiesta' },
    { hora: '03:00', evento: 'Despedida' },
  ];

  return (
    <div className="card itinerario">
      <h2>Itinerario</h2>
      <ul>
        {actividades.map((actividad, index) => (
          <li key={index}>
            <span>{actividad.hora}</span>
            <span>{actividad.evento}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itinerario;
