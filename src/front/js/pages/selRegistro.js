import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SelSignup = () => {
  return (
    <div className="container p-4">
      <h1 className="display-4 text-center">
        Ey! <br></br> ¿Cómo quieres registarte?
      </h1>
      <Link to="/registro-usuario">
        <span className="btn btn-primary btn-lg m-4 center" role="button">
          Usuario
        </span>
      </Link>
      <Link to="/registro-Locales">
        <span className="btn btn-primary btn-lg m-4" role="button">
          Restaurante
        </span>
      </Link>
    </div>
  );
};
