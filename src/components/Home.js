import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import ListaInvitados from "./ListaInvitados";
import ListaMesas from "./ListaMesas";
import Ubicacion from "./Ubicacion";
import Itinerario from "./Itinerario";
import FechaEvento from "./FechaEvento";
import Banner from "./Banner";
import Novios from "./Novios"; // Importamos el componente Novios
import "./Home.css";
import esquina1 from "../assets/images/novios/esquina-1.png";
import esquina2 from "../assets/images/novios/esquina-2.png";

const Home = () => {
  const [mesaAsignada] = useState("A1");
  const [confirmado, setConfirmado] = useState(null);
  const invitados = ["ChatGPT", "Juan", "Maria", "Pedro"];
  const mesas = ["A1", "A2", "B1", "B2"];
  const fechaEvento = "2025-11-07T23:59:59";

  const location = useLocation();
  const { username } = location.state || {};

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const carouselSettingsListas = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  const handleConfirmationChange = (e) => {
    setConfirmado(e.target.checked);
  };

  return (
    <div>
      <Banner username={username} /> {/* Componente Banner */}
      <Novios />{" "}
      {/* Aquí colocamos el componente Novios justo debajo del Banner */}
      <div className="card">
      <img className="top-right" src={esquina2} alt="Imagen en la esquina" />
        <FechaEvento fechaEvento={fechaEvento} />
      </div>
      <p>
        Esta es una breve descripción de nuestra aplicación. Aquí puedes
        encontrar información importante.
      </p>
      <div className="carousel-container">
        <Slider {...carouselSettings}>
          <div>
            <img
              src="https://via.placeholder.com/300x200?text=Imagen+1"
              alt="Imagen 1"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300x200?text=Imagen+2"
              alt="Imagen 2"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300x200?text=Imagen+3"
              alt="Imagen 3"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300x200?text=Imagen+4"
              alt="Imagen 4"
            />
          </div>
        </Slider>
      </div>
      <div className="card">
      <img className="top-right" src={esquina2} alt="Imagen en la esquina" />
        <h2>¿Asistirás al evento?</h2>
        <label>
          <input
            type="checkbox"
            checked={confirmado === true}
            onChange={handleConfirmationChange}
          />
          Confirmar asistencia
        </label>
        {confirmado !== null && (
          <p>
            {confirmado
              ? "¡Gracias por confirmar tu asistencia!"
              : "Lamentamos que no puedas asistir."}
          </p>
        )}
      </div>
      <div className="card carousel-container">
      <img className="top-right" src={esquina2} alt="Imagen en la esquina" />
        <Slider {...carouselSettingsListas}>
          <div>
            <ListaInvitados invitados={invitados} username={username} />
          </div>
          <div>
            <ListaMesas
              mesas={mesas}
              username={username}
              mesaAsignada={mesaAsignada}
            />
          </div>
          <div>
            <Itinerario />
          </div>
        </Slider>
      </div>
      <div className="card">
      <img className="top-right" src={esquina2} alt="Imagen en la esquina" />
        <Ubicacion />
      </div>
    </div>
  );
};

export default Home;
