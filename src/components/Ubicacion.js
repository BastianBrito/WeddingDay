// src/components/Ubicacion.js
import React from "react";
// import Map from "./Map.js"; // Activar mapa cuando ya esté listo el proyecto
import "./Ubicacion.css"; // Si no tienes un archivo CSS, puedes agregar los estilos en línea

const Ubicacion = () => {
  const handleButtonClick = () => {
    window.location.href = "https://maps.app.goo.gl/ahGFi23KpRtVFcaD6";
  };

  return (
    <div>
      <h2>Ubicación del Evento</h2>
      <p>Aquí encontrarás la ubicación del evento.</p>
      <button onClick={handleButtonClick}>Abrir ubicación</button>
      {/* Activar mapa cuando ya esté listo el proyecto */}
      {/* <Map/> */}
    </div>
  );
};

export default Ubicacion;
