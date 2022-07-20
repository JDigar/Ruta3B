import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardHome from "./../pages/cardHome.jsx";

import "../../styles/user.css";

export const Usuario = (props) => {
  const { store, actions } = useContext(Context);
  // console.log(store.profiles.nombre);
  // console.log(store.likes[nombre]);

  // store.profiles.map((item, index) => console.log(item.nombre));

  return (
    <>
      {store.auth === true ? (
        <div className="container-fluid mx-4">
          <div className="user">
            <div className="row mx-4">
              {/* <div className="col-2 p-3">
                <div className="foto-user col-3"></div>
              </div>
              <div className="col-6 p-3 user-description">
                <p>Esta es la descripcion del usuario</p>
              </div> */}
              <div className="">
                <h1>Ey, {store.profiles?.nombre}</h1>
              </div>
              <div className="col-10 congrats">
                <p>
                  Enhorabuena, {store.profiles?.nombre}! <br></br>
                  <br></br>A partir de ahora, eres miembro de la gran comunidad
                  RUTA 3B, donde podrás encontrar esos sitios que cumplen con
                  nuestra condición 3B, que sean buenos, bonitos y baratos en
                  esta gran ciudad. <br></br>
                  <br></br> No olvides dejar un comentario con tu experiencia y
                  una valoración, tu opinión es importante para nosotros y el
                  resto de la comunidad, además de participar en nuestro sorteo
                  sorpresa mensual.
                </p>
              </div>
            </div>
          </div>

          <div className="lineSeparating"></div>

          <div className="text-center d-flex mx-4">
            <div className="col-6">
              <h2>Mis sitios favoritos</h2>
            </div>
            <div className="col-6">
              <h2>He ido</h2>
            </div>
          </div>

          <div className="text-center d-flex container-fluid">
            <div className="col-5 cont row mx-5 p-4">
              {store.likes.map((item, index) => (
                <CardHome key={index} nombre={item.nombre} id={index} />
              ))}
            </div>

            <div className="col-5 cont row mx-5 p-4">
              {store.went.map((item, index) => (
                <CardHome key={index} nombre={item.nombre} id={index} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center p-5">Esto es una ruta protegida</h1>
      )}
    </>
  );
};

{
  /* <div className="col-6 d-flex flex-column align-items-center">
<h2>Tus sitios favoritos</h2>
<div className="card" style={{ width: 18 + "em" }}>
  <img
    src="https://media-cdn.tripadvisor.com/media/photo-s/01/eb/01/91/casa-paco-madrid.jpg"
    className="card-img-top"
    alt="casa-paco-image"
  />
  <div className="card-body">
    <h5 className="card-title">{store.likes}</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make
      up the bulk of the card's content.
    </p>
  </div>
</div>
</div>
<div className="col-6 d-flex flex-column align-items-center">
<h2>Tus sitios visitados</h2>
<div className="card" style={{ width: 18 + "em" }}>
  <img
    src="https://media-cdn.tripadvisor.com/media/photo-s/01/eb/01/91/casa-paco-madrid.jpg"
    className="card-img-top"
    alt="casa-paco-image"
  />
  <div className="card-body">
    <h5 className="card-title">CASA PACO</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make
      up the bulk of the card's content.
    </p>
  </div>
</div>
</div> */
}
