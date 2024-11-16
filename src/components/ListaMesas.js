// src/components/ListaMesas.js
import React from 'react';

const ListaMesas = ({ mesas, username, mesaAsignada }) => {
  return (
    <div className="card">
      <h2>Lista de Mesas</h2>
      <ul>
        {mesas.map((mesa, index) => (
          <li key={index} className={mesa === mesaAsignada ? 'bold' : ''}>
            Mesa {mesa} {mesa === mesaAsignada && `(Asignada a ${username})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaMesas;
