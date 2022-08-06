import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/card.css";

export const CardHome = ({ id, nombre, descripcion, tipo_local, foto }) => {
  const { store, actions } = useContext(Context);
  // console.log(id);

  return (
    <div className="mx-auto p-5 d-flex mini-container myborder">
      <img className="border border-dark w-50 rounded-4" src={foto} alt="" />
      <div className="p-3 w-50">
        <h2 className="">{nombre}</h2>
        <hr />
        {/* <span className="fs-6">❤❤❤❤❤</span> */}
        <p>Tipo de local: {tipo_local}</p>
        <p>{descripcion}</p>
        <button
          onClick={() => actions.addFavorite(id + 1)}
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
        {/* <button
          onClick={() => actions.addWent(nombre)}
          className="btn btn-outline-secondary btn-heart m-2"
        >
          HE IDO!
        </button> */}
        <Link
          to={"/ruta-comida/" + id}
          style={{ backgroundColor: "rgb(247, 230, 173)", color: "black" }}
          className="btn"
        >
          Saber Mas
        </Link>
      </div>
    </div>
  );
};

export default CardHome;
