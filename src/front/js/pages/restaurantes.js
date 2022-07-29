import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfilRestaurante.css";
import { Link, useParams } from "react-router-dom";
import { CardHome } from "./cardHome.jsx";

export const Restaurantes = () => {
  const { store, actions } = useContext(Context);

  const rest = store.restaurantes.map((item, index) => (
    <CardHome
      key={index}
      id={index}
      tipo_local={item.tipo_local}
      nombre={item.nombre}
    />
  ));

  // console.log( store.restaurante);
  console.log( rest);
  store.restaurantes.map((item, index) => (
    console.log(item.id)
  ));
  console.log(store.restaurantes);

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
