import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardHome2 = ({nombre,descripcion,id}) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-3 p-1 d-flex flex-row-reverse border border-danger mini-container">
        <img
          className="border border-dark w-25 "
          src="https://www.imor.es/wp-content/uploads/2017/09/imagen-de-prueba-320x240-300x225.jpg"
          alt=""
        />
        <div className=" p-1 w-25 border border-dark">
          <h2 className="border border-dark">{nombre} </h2>
          <span className="fs-6">❤❤❤❤❤</span>
          <p>
            {descripcion}
          </p>
        </div>
      </div>
	);
};
