import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardHome2 = ({ nombre, descripcion, id }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-3 p-5 d-flex flex-row-reverse mini-container myborder">
      <img
        className="border border-dark w-50 rounded-4"
        src="https://media.revistavanityfair.es/photos/6192972ec618c0cdf0bcaeb2/16:9/w_2560%2Cc_limit/La%2520Mamona%2520Castellana_18.jpg"
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
