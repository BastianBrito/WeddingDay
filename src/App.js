import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";  // Importa el componente Home

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Ruta del Login */}
        <Route path="/home" element={<Home />} />   {/* Ruta del Home */}
        <Route path="/" element={<Login />} />      {/* Ruta predeterminada */}
      </Routes>
    </Router>
  );
};

export default App;
