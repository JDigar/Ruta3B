import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/card.css";

export const CardHome = ({ id,nombre, descripcion, tipo_local }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-3 p-5 d-flex mini-container myborder">
      <img
        className="border border-dark w-50 rounded-4"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-restaurantes-decoracion-bonita-instagram-raimunda-madrid-1573068471.jpg?crop=1.00xw:0.719xh;0,0.178xh&resize=1200:*"
        alt=""
      />
      <div className="p-3 w-50">
        <h2 className="">{nombre}</h2>
        <hr />
        <span className="fs-6">❤❤❤❤❤</span>
        <p>Tipo de local: {tipo_local}</p>
        <p>{descripcion}</p>
        <button
          onClick={() => actions.addFavorite(id)}
          className="btn btn-outline-success btn-heart m-2"
        >
          ♡
        </button>
        <button
          onClick={() => actions.removeFavorite(id)}
          className="btn btn-outline-danger btn-heart m-2"
        >
          X
        </button>
        <button
          onClick={() => actions.addWent(nombre)}
          className="btn btn-outline-secondary btn-heart m-2"
        >
          HE IDO!
        </button>
        <Link to={"/ruta-comida/"+id} className="btn btn-primary">Saber Mas</Link>
      </div>
    </div>
  );
};

export default CardHome;
