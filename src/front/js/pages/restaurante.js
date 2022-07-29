import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/perfilRestaurante.css";

export const Restaurante = () => {
  const { store, actions } = useContext(Context);
  console.log(store.restaurantes);
  

  useEffect(() => {
    // actions.getFavorit();
    actions.getRestaurantes();
    
    
  }, []);
  const datos=store.restaurantes;
  
  const nombre=datos.map(a=>a.nombre);
  const descripcion=datos.map(a=>a.descripcion);
  //const restaurante = {
  //  id: 1,
  //  nombre: "Casa Paco",
  //  email: "pepito99@gmail.com",
  //  descripcion: "Las mejores comidas , todo casero y a tu gusto ",
  //  tipoDeLocal: "Restaurante",
  //  direccion: {
  //    id: 1,
  //    barrio: "La Mejostilla",
  //    calle: "Manuel Castillo",
  //    numero: 99,
  //  },
  //  reseña: {
  //    puntuacion: <b>⭐ ⭐ ⭐ ⭐ ⭐ </b>,
  //    comentario:
  //      "La comida estaba genial y con una gran atención por parte de los camareros .Volveremos!!",
  //  },
  //};
  //
  return (
    <>
      {store.auth &&
      store.auth != "" &&
      store.auth != undefined &&
      localStorage.getItem("esLocal") ? (
        <div>
          <div
            className="card mb-3"
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "100px",
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i0.wp.com/www.diegocoquillat.com/wp-content/uploads/2021/11/Promocionar-un-restaurante-segun-Google.jpg?w=700&ssl=1"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">
                    {nombre}--
                    {descripcion}
                  </h6>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container"
            style={{
              marginTop: "4cm",
              marginRight: "100px",
              marginLeft: "50px",
              backgroundColor: "rgb(247, 230, 173)",
              padding: "2cm",
            }}
          >
            <p>
              Enhorabuena {nombre}.!.. <br></br>A
              partir de ahora, eres miembro de la gran comunidad que conforma la
              RUTA 3B, donde podrás exponer de forma simple y rapida tus
              servicios y promociones basadosa en nuestra politica 3B "Bueno,
              Bonito y Barato". No tengas miedo.! por muy pequeño que seas y
              aunque no te encuentres en el centro de la ciudad, nosotros te
              ayudamos a ofrecer tus servicios, porque a todos nos gusta ir de
              copas junto a un buen tapeo, comer bien a un precio justo y por
              supuesto, conocer locales nuevos que se esconden en los barrios y
              sus infinitas calles que conforman esta hermosa ciudad. No olvides
              subir fotos de tu local, mostrar la carta, promociones que tengas
              y decirnos que te distingue del resto en una breve descripción.
            </p>

            <a
              className="link"
              aria-current="page"
              href="#"
              style={{ marginTop: "4cm" }}
            >
              {" "}
              Nuestra politica{" "}
            </a>
          </div>
          <div className="card-group">
            <div className="card">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/1c/1b/7b/13/area-interna.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card">
              <img
                src="https://www.laguiago.com/wp-content/uploads/2020/12/RESTAURANTE-ALMA-MATER-7-scaled-1.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card">
              <img
                src="https://www.hoteles-silken.com/content/imgsxml/galerias/panel_sliderheaderhotel/1/t-restaurante-etxaniz-015971.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="div-err-login text-center">
          <h2>Primero debería registrarse!</h2>
          <button
            type="button"
            className="btn  btn-sm h-50 m-3"
            style={{
              backgroundColor: "rgb(247, 230, 173)",
              color: "black",
            }}
          >
            <Link className=" button-err" to="/">
              Volver al Inicio
            </Link>
          </button>
        </div>
      )}
    </>
  );
};
