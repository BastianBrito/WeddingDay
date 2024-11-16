import React from "react";
import "./Banner.css"; // Asegúrate de que el archivo CSS esté correctamente importado

const Banner = ({ username }) => {
  return (
    <div className="banner">
      <h1>Bienvenido a nuestra boda</h1>
      <p>
        {username ? <span className="usuario">{username}</span> : "Invitado"}
      </p>
    </div>
  );
};

export default Banner;
