import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import CargaDeFoto from "../component/cargaDeFoto";

export const Home = () => {
  return (
    <div className="container text-center">
      <div>
        <Link to="/registroUsuario">
          <button type="button" className="btn btn-primary">
            Registro de Usuario
          </button>
        </Link>
        <br />
        <Link to="/loginView">
          <button type="button" className="btn btn-primary mt-3">
            Login
          </button>
        </Link>
      </div>

      <div className="container mt-5 border">
        <h1>Para cargar foto de usuario</h1>
        <CargaDeFoto />
      </div>
    </div>
  );
};
