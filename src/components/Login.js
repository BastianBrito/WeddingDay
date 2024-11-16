import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Usamos useNavigate para redirigir
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Creamos una instancia de navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir a la página de Home pasando el nombre de usuario como estado
    navigate("/home", { state: { username } }); // Se pasa el username a la ruta de Home
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Ingrese su usuario"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ingrese su contraseña"
            />
          </div>
          <button type="submit" className="submit-btn">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
