import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfilRestaurante.css";

export const Restaurante = () => {
  const { store, actions } = useContext(Context);
  console.log(store.restaurantes);
  const restaurante = {
    id: 1,
    nombre: "Casa Paco",
    email: "pepito99@gmail.com",
    descripcion: "Las mejores comidas , todo casero y a tu gusto ",
    tipoDeLocal: "Restaurante",
    direccion: {
      id: 1,
      barrio: "La Mejostilla",
      calle: "Manuel Castillo",
      numero: 99,
    },
    reseña: {
      puntuacion: <b>⭐ ⭐ ⭐ ⭐ ⭐ </b>,
      comentario:
        "La comida estaba genial y con una gran atención por parte de los camareros .Volveremos!!",
    },
  };

  return (
    <>
      <div
        className="card mb-3"
        style={{ marginLeft: "20px", marginRight: "20px", marginTop: "30px" }}
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
              <h5 className="card-title">
                {restaurante.nombre}-{restaurante.email}
              </h5>
              <p className="card-text">{restaurante.descripcion}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: "2cm",
          marginRight: "100px",
          marginLeft: "50px",
          backgroundColor: "rgb(247, 230, 173)",
          padding: "2cm",
        }}
      >
        <p>
          Enhorabuena {restaurante.nombre}.!.. <br></br>A partir de ahora, eres
          miembro de la gran comunidad que conforma la RUTA 3B, donde podrás
          exponer de forma simple y rapida tus servicios y promociones basadosa
          en nuestra politica 3B "Bueno, Bonito y Barato". No tengas miedo.! por
          muy pequeño que seas y aunque no te encuentres en el centro de la
          ciudad, nosotros te ayudamos a ofrecer tus servicios, porque a todos
          nos gusta ir de copas junto a un buen tapeo, comer bien a un precio
          justo y por supuesto, conocer locales nuevos que se esconden en los
          barrios y sus infinitas calles que conforman esta hermosa ciudad. No
          olvides subir fotos de tu local, mostrar la carta, promociones que
          tengas y decirnos que te distingue del resto en una breve descripción.
        </p>

        <a
          className="link"
          aria-current="page"
          href="#"
          style={{ marginTop: "2cm" }}
        >
          {" "}
          Nuestra politica{" "}
        </a>

        <div className="reseñas" style={{ marginTop: "2cm" }}>
          <div className="row1 d-flex">
            <div className="col-md-4" style={{ marginLeft: "7cm" }}>
              <b>Tus reseñas :</b>
              <p>{restaurante.reseña.comentario}</p>
              <p>{restaurante.reseña.puntuacion}</p>
            </div>
            <div className="valoracion col-md-4 " style={{ marginLeft: "4cm" }}>
              <b>Tu valoración :</b>
              <h2>5/5</h2>
            </div>
          </div>
        </div>
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
    </>
  );
};
