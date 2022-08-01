import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardHome2 = ({ nombre, descripcion, id,foto }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-3 p-5 d-flex flex-row-reverse mini-container myborder">
      <img
        className="border border-dark w-50 rounded-4"
        src={foto}
        alt=""
      />
      <div className=" p-3 w-50">
        <h2 className="">{nombre} </h2>
        <hr />
        <span className="fs-6">❤❤❤❤❤</span>
        <p>{descripcion}</p>
        <button
          onClick={() => actions.addFavorit(nombre)}
          className="btn btn-outline-danger btn-heart m-2"
        >
          ♡
        </button>
        <button
          onClick={() => actions.addWent(nombre)}
          className="btn btn-outline-secondary btn-heart m-2"
        >
          HE IDO!
        </button>
      </div>
    </div>
  );
};
