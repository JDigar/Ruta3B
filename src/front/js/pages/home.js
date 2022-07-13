import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container text-center">
      <Link to="/registroUsuario">
        <button type="button" class="btn btn-primary">
          Registro de Usuario
        </button>
      </Link>
      <br />
      <Link to="/loginView">
        <button type="button" class="btn btn-primary mt-3">
          Login
        </button>
      </Link>
    </div>
  );
};
