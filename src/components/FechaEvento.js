// src/components/FechaEvento.js
import React, { useState, useEffect } from "react";
import './FechaEvento.css'

// Componente para mostrar la cuenta regresiva
const FechaEvento = ({ fechaEvento }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(fechaEvento));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(fechaEvento));
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar el componente
  }, [fechaEvento]);

  // Función para calcular el tiempo restante
  function calculateTimeLeft(eventDate) {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Formatear la fecha para mostrarla de forma legible
  const formatFechaEvento = new Date(fechaEvento).toLocaleString("es-CL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="fecha-evento">
      {/* Título principal */}
      <h2 className="fecha-evento-titulo">Fecha evento:</h2>

      {/* Fecha ingresada */}
      <h3 className="fecha-evento-fecha">{formatFechaEvento}</h3>

      {/* Título pequeño y cuenta regresiva */}
      <h4 className="fecha-evento-quedan">Quedan:</h4>
      <p className="fecha-evento-cuenta-regresiva">
        {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes} minutos,{" "}
        {timeLeft.seconds} segundos
      </p>
    </div>
  );
};

export default FechaEvento;
