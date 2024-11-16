// src/components/ListaInvitados.js
import React from 'react';

const ListaInvitados = ({ invitados, username }) => {
  return (
    <div className="card">
      <h2>Lista de Invitados</h2>
      <ul>
        {invitados.map((invitado, index) => (
          <li key={index} className={invitado === username ? 'bold' : ''}>
            {invitado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaInvitados;
