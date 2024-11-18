import React from "react";
import "./Novios.css"; // Importamos el archivo CSS para el componente
// Importamos la imagen de los novios
import bastianMacarenaImg3 from "../assets/images/novios/bastian-macarena-3.png";

const Novios = () => {
  return (
    <div className="novios-container">
      <img
        src={bastianMacarenaImg3}
        alt="Bastián y Macarena"
        className="novios-photo"
      />
      <p className="novios-text">
        <span>BASTIÁN</span>
        <span>&</span>
        <span>MACARENA</span>
      </p>
    </div>
  );
};

export default Novios;
