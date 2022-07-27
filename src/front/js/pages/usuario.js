import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

import CardHome from "./../pages/cardHome.jsx";

import "../../styles/user.css";
import "../../styles/loginError.css";

export const Usuario = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getFavorit();
    // actions.getInformationCurrentMember();
  }, []);

  console.log(store.likes);
  return (
    <>
      {store.auth && store.auth != "" && store.auth != undefined ? (
        <div className="container-fluid">
          <div className="user">
            <div className="row mx-4">
              {/* <div className="col-2 p-3">
>>>>>>> 441c63602d0acd388f7b35275098b793e5ccfdf6
            <div className="foto-user col-3"></div>
          </div>
          <div className="col-6 p-3 user-description">
            <p>Esta es la descripcion del usuario</p>
          </div> */}
              <div className="">
                <h1>
                  Ey, {store.profiles?.nombre} {store.profiles?.apellido}
                </h1>
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
                  {store.likes.length > 0
                    ? store?.likes.map((item, index) => (
                        <CardHome
                          key={index}
                          nombre={item.nombre}
                          id={item.id}
                        />
                      ))
                    : null}
                </div>

                <div className="col-5 cont row mx-5 p-4">
                  {store.went.map((item, index) => (
                    <CardHome key={index} nombre={item.nombre} id={index} />
                  ))}
                </div>
              </div>
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
