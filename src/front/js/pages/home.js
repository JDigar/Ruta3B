import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import CargaDeFoto from "../component/cargaDeFoto";

export const Home = () => {
  return (
    <div className="container">
      <div className="container mt-3">
        <Link to="/registro-usuario">
          <button type="button" className="btn btn-primary">
            Registro de Usuario
          </button>
        </Link>
      </div>

      <div className="container mt-3">
        <Link to="/login">
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </Link>
      </div>

      <div className="container mt-3">
        <Link to="/registro-Locales">
          <button type="button" className="btn btn-primary">
            Registro de Locales
          </button>
        </Link>
      </div>

      <div className="container mt-3 border">
        <h1>Para cargar foto de usuario</h1>
        <CargaDeFoto />
      </div>
    </div>
  );
};
