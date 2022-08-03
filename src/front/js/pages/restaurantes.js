import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfilRestaurante.css";
import { Link, useParams } from "react-router-dom";
import { CardHome } from "./cardHome.jsx";

export const Restaurantes = () => {
  const { store, actions } = useContext(Context);

  const rest = store.restaurantes.map((item, index) => (
    <CardHome
      key={item.id}
      id={item.id}
      descripcion={item.descripcion}
      tipo_local={item.tipo_local}
      nombre={item.nombre}
      foto={item.foto}
    />
  ));

  // console.log( store.restaurante);
  // console.log( rest);
  store.restaurantes.map((item, index) => console.log(item.id));

  const datos = store.restaurantes;

  const precios = datos.map((a) => a.precio);
  console.log(precios);
  const nombre = datos.map((a) => a.nombre);
  console.log(nombre);

  return (
    <>
      <div className="text-center d-flex container-fluid w-75">
        <div className="col-5 cont2 row mx-5 p-5">
          {rest}

          {/* {store.restaurantes.map((item, index) => (
          <CardHome
            key={index}
            id={item.id}
            tipo_local={item.tipo_local}
            nombre={item.nombre}
          />))} */}
          {/* <Link to={"/ruta-comida/"></Link> */}
        </div>
      </div>
    </>
  );
};
