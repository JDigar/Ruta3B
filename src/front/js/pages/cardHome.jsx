import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardHome = ({nombre,descripcion,id}) => {
	const { store, actions } = useContext(Context);

 	return (
		<div className="mt-3 p-1 d-flex mini-container">
        <img
          className="border border-dark w-25"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-restaurantes-decoracion-bonita-instagram-raimunda-madrid-1573068471.jpg?crop=1.00xw:0.719xh;0,0.178xh&resize=1200:*"
          alt=""
        />
        <div className="p-3 w-25">
          <h2 className="">{nombre}</h2>
          <hr/>
          <span className="fs-6">❤❤❤❤❤</span>
          <p>
            {descripcion}
          </p>
        </div>
     </div>	
	);
};
